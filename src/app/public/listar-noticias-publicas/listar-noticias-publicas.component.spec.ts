import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNoticiasPublicasComponent } from './listar-noticias-publicas.component';

describe('ListarNoticiasPublicasComponent', () => {
  let component: ListarNoticiasPublicasComponent;
  let fixture: ComponentFixture<ListarNoticiasPublicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarNoticiasPublicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNoticiasPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
