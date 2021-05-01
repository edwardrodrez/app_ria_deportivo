import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContactosPublicasComponent } from './listar-contactos-publicas.component';

describe('ListarContactosPublicasComponent', () => {
  let component: ListarContactosPublicasComponent;
  let fixture: ComponentFixture<ListarContactosPublicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarContactosPublicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarContactosPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
