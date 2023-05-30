import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  form = this.formBuilder
    .group({
      rest: '/usuarios',
    })

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  onClick() {
    console.log("Use o F12, DevTools, pra ver esse log")
    console.log("Valor dos campos do formulário")
    console.log(this.form.value)
  }
}
