import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimMediopagosComponent } from './elim-mediopagos.component';

describe('ElimMediopagosComponent', () => {
  let component: ElimMediopagosComponent;
  let fixture: ComponentFixture<ElimMediopagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimMediopagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimMediopagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
