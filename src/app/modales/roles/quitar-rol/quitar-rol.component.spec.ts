import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitarRolComponent } from './quitar-rol.component';

describe('QuitarRolComponent', () => {
  let component: QuitarRolComponent;
  let fixture: ComponentFixture<QuitarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuitarRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
