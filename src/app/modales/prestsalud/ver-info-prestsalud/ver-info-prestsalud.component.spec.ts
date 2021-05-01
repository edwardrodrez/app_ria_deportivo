import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoPrestsaludComponent } from './ver-info-prestsalud.component';

describe('VerInfoPrestsaludComponent', () => {
  let component: VerInfoPrestsaludComponent;
  let fixture: ComponentFixture<VerInfoPrestsaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoPrestsaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoPrestsaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
