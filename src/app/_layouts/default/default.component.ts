import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { PoMenuItem } from '@po-ui/ng-components'

import { ProJsToAdvplService } from '@totvs/protheus-lib-core'
import { ProAppConfigService } from '@totvs/protheus-lib-core'

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})

export class DefaultComponent {
  menus: PoMenuItem[] = [
    {
      label: 'Home',
      shortLabel: 'Home',
      icon: 'fa-solid fa-house-chimney',
      action: () => this.router.navigate(['home']),
    },
    {
      label: 'Dashboards',
      shortLabel: 'Dashs',
      icon: 'fa-solid fa-house-chimney',
      subItems: [
        {
          label: 'Dashboard Simples',
          shortLabel: 'Simples',
          icon: 'fa-solid fa-house-chimney',
          action: () => this.router.navigate(['pages/dashboards']),
        },
      ],
    },
    {
      label: 'Sair',
      shortLabel: 'Sair',
      icon: 'fa-solid fa-house-chimney',
      action: () => this.proAppConfigService.callAppClose(),
    },
  ]

  constructor(
    private router: Router,
    private proAppConfigService: ProAppConfigService,
    private proJsToAdvplService: ProJsToAdvplService,
  ) {
    if (this.proAppConfigService.insideProtheus()) {
      this.router.navigate(['home'])
      return
    }
    this.proJsToAdvplService.jsToAdvpl('mensagemJavascript', 'Comando enviado pelo Javascript')
  }
}
