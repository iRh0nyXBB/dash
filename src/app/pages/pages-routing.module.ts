import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'dashboards',
    loadChildren: () => import('src/app/pages/dashboards/dashboards.module').then((m) => m.DashboardsModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule { }
