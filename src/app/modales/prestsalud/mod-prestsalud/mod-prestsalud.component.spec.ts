import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPrestsaludComponent } from './mod-prestsalud.component';

describe('ModPrestsaludComponent', () => {
  let component: ModPrestsaludComponent;
  let fixture: ComponentFixture<ModPrestsaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModPrestsaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPrestsaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
