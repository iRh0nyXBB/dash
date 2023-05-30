import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"

import { DefaultComponent } from "src/app/_layouts/default/default.component"
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: 'pages',
        loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  { path: "**", redirectTo: "/home" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
