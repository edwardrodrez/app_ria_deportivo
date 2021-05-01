import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModNoticiaComponent } from './mod-noticia.component';

describe('ModNoticiaComponent', () => {
  let component: ModNoticiaComponent;
  let fixture: ComponentFixture<ModNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
