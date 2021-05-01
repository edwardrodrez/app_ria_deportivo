import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActividadesPublicasComponent } from './listar-actividades-publicas.component';

describe('ListarActividadesPublicasComponent', () => {
  let component: ListarActividadesPublicasComponent;
  let fixture: ComponentFixture<ListarActividadesPublicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarActividadesPublicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarActividadesPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
