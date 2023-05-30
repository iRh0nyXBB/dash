import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"

import { Observable } from "rxjs"

import { environment } from "src/environments/environment"

@Injectable({
  providedIn: "root",
})

export class RestService {
  private headers: HttpHeaders
  private baseUrl: string

  constructor(
    private http: HttpClient,
  ) {
    this.setHeader("Content-Type", "application/json")
    this.setHeader("X-PO-Screen-Lock", "true")
    this.setHeader("X-PO-No-Message", "false")
  }

  public setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  public getBaseUrl(): string {
    return this.baseUrl
  }

  public get(
    url: string,
    ...args: { [header: string]: string }[]
  ): Observable<any> {
    let headers = Object.assign(new HttpHeaders(), this.headers)
    let params = new HttpParams()
    args.some((arg) => {
      const param = arg as any
      if (param.noMessage) {
        headers = headers.set("X-PO-No-Message", param.noMessage)
      }
      if (param.screenLock) {
        headers = headers.set("X-PO-Screen-Lock", param.screenLock)
      }
      if (param.queryParams) {
        params = param.queryParams
      }
    })
    return this.http.get(environment.baseUrl + url, { headers, params })
  }

  public put(url: string, body: any, ...args: { [header: string]: string }[]) {
    let headers = Object.assign(new HttpHeaders(), this.headers)
    args.some((arg) => {
      const param = arg as any
      if (param.noMessage) {
        headers = headers.set("X-PO-No-Message", param.noMessage)
      }
      if (param.screenLock) {
        headers = headers.set("X-PO-Screen-Lock", param.screenLock)
      }
    })
    return this.http.put(environment.baseUrl + url, body, {
      headers,
    })
  }

  public post(url: string, body: any, ...args: { [header: string]: string }[]) {
    let headers = Object.assign(new HttpHeaders(), this.headers)
    args.some((arg) => {
      const param = arg as any
      if (param.noMessage) {
        headers = headers.set("X-PO-No-Message", param.noMessage)
      }
      if (param.screenLock) {
        headers = headers.set("X-PO-Screen-Lock", param.screenLock)
      }
    })
    return this.http.post(environment.baseUrl + url, body, {
      headers,
    })
  }

  public deleteAll(
    url: string,
    body: any,
    ...args: { [header: string]: string }[]
  ) {
    let headers = Object.assign(new HttpHeaders(), this.headers)
    args.some((arg) => {
      const param = arg as any
      if (param.noMessage) {
        headers = headers.set("X-PO-No-Message", param.noMessage)
      }
      if (param.screenLock) {
        headers = headers.set("X-PO-Screen-Lock", param.screenLock)
      }
    })
    return this.http.request("delete", environment.baseUrl + url, {
      headers,
      body,
    })
  }

  private setHeader(name: string, value: string | string[]): void {
    if (!this.headers) {
      this.headers = new HttpHeaders()
    }
    if (this.headers.has(name)) {
      this.headers = this.headers.set(name, value)
    } else {
      this.headers = this.headers.append(name, value)
    }
  }
}
