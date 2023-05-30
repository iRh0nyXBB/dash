import { Injectable } from "@angular/core"

import { PoDialogService, PoNotificationService } from "@po-ui/ng-components"

import { environment } from "src/environments/environment"

import { RestService } from "src/app/services/rest.service"

@Injectable({
  providedIn: "root",
})

export class AppFunctionService {
  constructor(
    public restService: RestService,
    public poNotificationService: PoNotificationService,
    public poDialogService: PoDialogService,
  ) {
    this.restService.setBaseUrl(environment.baseUrl)
    this.poNotificationService.setDefaultDuration(environment.poNotificationDuration)
  }
}
