import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNoticiasPrivadasComponent } from './listar-noticias-privadas.component';

describe('ListarNoticiasPrivadasComponent', () => {
  let component: ListarNoticiasPrivadasComponent;
  let fixture: ComponentFixture<ListarNoticiasPrivadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarNoticiasPrivadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNoticiasPrivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
