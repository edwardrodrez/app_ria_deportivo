import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimPagosComponent } from './elim-pagos.component';

describe('ElimPagosComponent', () => {
  let component: ElimPagosComponent;
  let fixture: ComponentFixture<ElimPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
