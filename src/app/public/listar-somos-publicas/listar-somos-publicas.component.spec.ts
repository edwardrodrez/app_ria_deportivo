import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSomosPublicasComponent } from './listar-somos-publicas.component';

describe('ListarSomosPublicasComponent', () => {
  let component: ListarSomosPublicasComponent;
  let fixture: ComponentFixture<ListarSomosPublicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSomosPublicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSomosPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
