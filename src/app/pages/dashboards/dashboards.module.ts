import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from 'src/app/shared/shared.module'
import { DashboardsRoutingModule } from 'src/app/pages/dashboards/dashboards-routing.module'

import { SimpleDashComponent } from "src/app/pages/dashboards/simple-dash/simple-dash.component"

@NgModule({
  declarations: [
    SimpleDashComponent,
  ],
  exports: [
    SimpleDashComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardsRoutingModule,
  ],
})

export class DashboardsModule { }
