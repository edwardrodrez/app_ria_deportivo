import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrestsaludComponent } from './add-prestsalud.component';

describe('AddPrestsaludComponent', () => {
  let component: AddPrestsaludComponent;
  let fixture: ComponentFixture<AddPrestsaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrestsaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrestsaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
