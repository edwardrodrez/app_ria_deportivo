import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModMediopagosComponent } from './mod-mediopagos.component';

describe('ModMediopagosComponent', () => {
  let component: ModMediopagosComponent;
  let fixture: ComponentFixture<ModMediopagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModMediopagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModMediopagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
