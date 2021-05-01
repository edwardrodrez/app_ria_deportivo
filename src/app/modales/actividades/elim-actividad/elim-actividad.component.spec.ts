import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimActividadComponent } from './elim-actividad.component';

describe('ElimActividadComponent', () => {
  let component: ElimActividadComponent;
  let fixture: ComponentFixture<ElimActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
