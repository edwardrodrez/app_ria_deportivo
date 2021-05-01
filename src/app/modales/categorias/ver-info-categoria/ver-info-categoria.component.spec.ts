import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoCategoriaComponent } from './ver-info-categoria.component';

describe('VerInfoCategoriaComponent', () => {
  let component: VerInfoCategoriaComponent;
  let fixture: ComponentFixture<VerInfoCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
