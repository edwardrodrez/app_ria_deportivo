import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoNoticiaComponent } from './ver-info-noticia.component';

describe('VerInfoNoticiaComponent', () => {
  let component: VerInfoNoticiaComponent;
  let fixture: ComponentFixture<VerInfoNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
