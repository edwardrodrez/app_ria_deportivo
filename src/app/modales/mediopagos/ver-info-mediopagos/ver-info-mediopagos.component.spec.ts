import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoMediopagosComponent } from './ver-info-mediopagos.component';

describe('VerInfoMediopagosComponent', () => {
  let component: VerInfoMediopagosComponent;
  let fixture: ComponentFixture<VerInfoMediopagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoMediopagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoMediopagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
