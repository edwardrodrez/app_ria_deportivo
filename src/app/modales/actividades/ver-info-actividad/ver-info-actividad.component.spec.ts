import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoActividadComponent } from './ver-info-actividad.component';

describe('VerInfoActividadComponent', () => {
  let component: VerInfoActividadComponent;
  let fixture: ComponentFixture<VerInfoActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
