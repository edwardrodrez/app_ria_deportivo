import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSomosComponent } from './info-somos.component';

describe('InfoSomosComponent', () => {
  let component: InfoSomosComponent;
  let fixture: ComponentFixture<InfoSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
