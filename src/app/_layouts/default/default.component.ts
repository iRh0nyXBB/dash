import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { PoMenuItem } from '@po-ui/ng-components'

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})

export class DefaultComponent {
  readonly menus: PoMenuItem[] = [
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
      action: () => console.log("Saiu"),
    },
  ]

  constructor(
    private router: Router,
  ) { }
}
