import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimCategoriaComponent } from './elim-categoria.component';

describe('ElimCategoriaComponent', () => {
  let component: ElimCategoriaComponent;
  let fixture: ComponentFixture<ElimCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
