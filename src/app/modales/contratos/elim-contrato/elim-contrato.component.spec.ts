import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimContratoComponent } from './elim-contrato.component';

describe('ElimContratoComponent', () => {
  let component: ElimContratoComponent;
  let fixture: ComponentFixture<ElimContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
