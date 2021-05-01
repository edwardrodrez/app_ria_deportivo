import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimPrestsaludComponent } from './elim-prestsalud.component';

describe('ElimPrestsaludComponent', () => {
  let component: ElimPrestsaludComponent;
  let fixture: ComponentFixture<ElimPrestsaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimPrestsaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimPrestsaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
