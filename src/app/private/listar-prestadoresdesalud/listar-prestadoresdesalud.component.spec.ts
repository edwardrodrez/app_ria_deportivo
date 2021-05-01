import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrestadoresdesaludComponent } from './listar-prestadoresdesalud.component';

describe('ListarPrestadoresdesaludComponent', () => {
  let component: ListarPrestadoresdesaludComponent;
  let fixture: ComponentFixture<ListarPrestadoresdesaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPrestadoresdesaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrestadoresdesaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
