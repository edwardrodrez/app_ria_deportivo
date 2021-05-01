import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCategoriaComponent } from './mod-categoria.component';

describe('ModCategoriaComponent', () => {
  let component: ModCategoriaComponent;
  let fixture: ComponentFixture<ModCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
