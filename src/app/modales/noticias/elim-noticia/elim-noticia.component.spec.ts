import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimNoticiaComponent } from './elim-noticia.component';

describe('ElimNoticiaComponent', () => {
  let component: ElimNoticiaComponent;
  let fixture: ComponentFixture<ElimNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
