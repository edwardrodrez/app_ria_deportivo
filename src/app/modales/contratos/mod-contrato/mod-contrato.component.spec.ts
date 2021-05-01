import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModContratoComponent } from './mod-contrato.component';

describe('ModContratoComponent', () => {
  let component: ModContratoComponent;
  let fixture: ComponentFixture<ModContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
