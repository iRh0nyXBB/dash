import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { finalize } from 'rxjs'

import { ProAppConfigService, ProThreadInfo, ProThreadInfoService, ProUserInfo } from '@totvs/protheus-lib-core'

interface IUser {
  id: string
  login: string
  nome: string
  email: string
}

interface IRequestUser {
  hasNext: boolean
  total: number
  items: IUser[]
  _messages: { code: number, message: string, type: string }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  user: ProUserInfo = {}
  proThreadInfo: ProThreadInfo = {
    userId: '',
    userName: '',
  }

  items: { id: string, login: string, nome: string, email: string }[] = []
  isLoading: boolean = false

  message: string[] = []
  result: { route: string, data: any }[] = []

  form = this.formBuilder
    .group({
      rest: '/usuarios',
    })

  private headers: HttpHeaders = new HttpHeaders()

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private proAppConfigService: ProAppConfigService,
    private proThreadInfoService: ProThreadInfoService,
  ) {
    this.setHeader("Content-Type", "application/json")
    this.getUserInfo()
    this.message.push(this.proAppConfigService.serverWithApiUrl)
    this.message.push(this.proAppConfigService.nameApp)
    this.message.push(this.proAppConfigService.productLine)
    this.message.push(`${this.proAppConfigService.insideProtheus()}`)
    this.message.push(`${this.proAppConfigService.isProtheusRender}`)
    this.proThreadInfo = this.proThreadInfoService.proThreadInfo
  }

  private getUserInfo() {
    this.proThreadInfoService
      .getUserInfoThread()
      .subscribe({
        next: (res: ProUserInfo) => {
          this.user = res
          this.message.push(`getUserInfo: ${JSON.stringify(res)}`)
        }
      })
  }

  private setHeader(name: string, value: string | string[]) {
    this.headers = this.headers || new HttpHeaders()
    this.headers = this.headers.has(name) ? this.headers.set(name, value) : this.headers.append(name, value)
  }

  onClick() {
    this.items = []
    this.isLoading = true
    const rest = this.form.value.rest || '/usuarios'

    this.httpClient
      .get(rest, { headers: this.headers })
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (result: any) => {
          this.result.push({ route: rest, data: JSON.stringify(result) })
          this.items = result?.items || []
        },
        error: (error: any) => {
          this.message.push(`Erro ${typeof error == 'string' ? error : JSON.stringify(error)}`)
        }
      })
  }
}
