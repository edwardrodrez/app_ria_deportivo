import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediopagosComponent } from './add-mediopagos.component';

describe('AddMediopagosComponent', () => {
  let component: AddMediopagosComponent;
  let fixture: ComponentFixture<AddMediopagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMediopagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMediopagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
