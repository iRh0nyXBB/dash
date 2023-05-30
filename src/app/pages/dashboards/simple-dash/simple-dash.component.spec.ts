import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimpleDashComponent } from 'src/app/pages/dashboards/simple-dash/simple-dash.component'

describe('SimpleDashComponent', () => {
  let component: SimpleDashComponent
  let fixture: ComponentFixture<SimpleDashComponent>

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        declarations: [SimpleDashComponent]
      })
      .compileComponents()

    fixture = TestBed.createComponent(SimpleDashComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
