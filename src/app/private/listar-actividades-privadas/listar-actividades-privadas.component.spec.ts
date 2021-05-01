import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActividadesPrivadasComponent } from './listar-actividades-privadas.component';

describe('ListarActividadesPrivadasComponent', () => {
  let component: ListarActividadesPrivadasComponent;
  let fixture: ComponentFixture<ListarActividadesPrivadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarActividadesPrivadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarActividadesPrivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
