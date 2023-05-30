import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from 'src/app/shared/shared.module'
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module'

@NgModule({
  declarations: [
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PagesRoutingModule,
  ],
})

export class PagesModule { }
