import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimUsuarioComponent } from './elim-usuario.component';

describe('ElimUsuarioComponent', () => {
  let component: ElimUsuarioComponent;
  let fixture: ComponentFixture<ElimUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
