import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModActividadComponent } from './mod-actividad.component';

describe('ModActividadComponent', () => {
  let component: ModActividadComponent;
  let fixture: ComponentFixture<ModActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
