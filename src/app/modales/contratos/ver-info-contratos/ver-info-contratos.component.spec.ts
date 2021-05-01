import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoContratosComponent } from './ver-info-contratos.component';

describe('VerInfoContratosComponent', () => {
  let component: VerInfoContratosComponent;
  let fixture: ComponentFixture<VerInfoContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
