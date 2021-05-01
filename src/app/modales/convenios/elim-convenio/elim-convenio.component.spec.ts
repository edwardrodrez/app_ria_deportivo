import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimConvenioComponent } from './elim-convenio.component';

describe('ElimConvenioComponent', () => {
  let component: ElimConvenioComponent;
  let fixture: ComponentFixture<ElimConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
