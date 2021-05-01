import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNoticiaComponent } from './info-noticia.component';

describe('InfoNoticiaComponent', () => {
  let component: InfoNoticiaComponent;
  let fixture: ComponentFixture<InfoNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
