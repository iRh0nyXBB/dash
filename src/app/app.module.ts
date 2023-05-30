import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { PoPageModule } from "@po-ui/ng-components"

import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core'

import { AppRoutingModule } from 'src/app/app-routing.module'

import { AppComponent } from "src/app/app.component"
import { DefaultComponent } from "src/app/_layouts/default/default.component"
import { HomeComponent } from "src/app/home/home.component"

import { SharedModule } from "src/app/shared/shared.module"

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PoPageModule,
    ProtheusLibCoreModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
