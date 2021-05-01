import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMediosdepagoComponent } from './listar-mediosdepago.component';

describe('ListarMediosdepagoComponent', () => {
  let component: ListarMediosdepagoComponent;
  let fixture: ComponentFixture<ListarMediosdepagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMediosdepagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMediosdepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
