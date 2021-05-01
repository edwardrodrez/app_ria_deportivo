import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoPagosComponent } from './ver-info-pagos.component';

describe('VerInfoPagosComponent', () => {
  let component: VerInfoPagosComponent;
  let fixture: ComponentFixture<VerInfoPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
