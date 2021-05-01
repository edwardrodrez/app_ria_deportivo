import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPagosComponent } from './mod-pagos.component';

describe('ModPagosComponent', () => {
  let component: ModPagosComponent;
  let fixture: ComponentFixture<ModPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
