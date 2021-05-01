import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModConvenioComponent } from './mod-convenio.component';

describe('ModConvenioComponent', () => {
  let component: ModConvenioComponent;
  let fixture: ComponentFixture<ModConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
