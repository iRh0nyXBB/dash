import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import {
  PoDialogModule,
  PoHttpInterceptorModule,
  PoModule,
  PoPageModule,
} from "@po-ui/ng-components"

import {
  PoModalPasswordRecoveryModule,
  PoPageChangePasswordModule,
  PoPageDynamicEditModule,
  PoPageDynamicTableModule,
  PoPageLoginModule,
  PoTemplatesModule,
} from "@po-ui/ng-templates"

import { PouiModule } from "src/app/modules/poui.module"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
    PoTemplatesModule,
    PouiModule,
    PoDialogModule,
    PoPageLoginModule,
    PoHttpInterceptorModule,
    PoModalPasswordRecoveryModule,
    PoPageModule,
    PoPageChangePasswordModule,
    PoPageDynamicTableModule,
    PoPageDynamicEditModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
    PoTemplatesModule,
    PouiModule,
    PoDialogModule,
    PoPageLoginModule,
    PoHttpInterceptorModule,
    PoModalPasswordRecoveryModule,
    PoPageModule,
    PoPageChangePasswordModule,
    PoPageDynamicTableModule,
    PoPageDynamicEditModule,
  ],
})

export class SharedModule {}
