import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoConvenioComponent } from './ver-info-convenio.component';

describe('VerInfoConvenioComponent', () => {
  let component: VerInfoConvenioComponent;
  let fixture: ComponentFixture<VerInfoConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
