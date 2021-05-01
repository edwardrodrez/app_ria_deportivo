import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoUsuarioComponent } from './ver-info-usuario.component';

describe('VerInfoUsuarioComponent', () => {
  let component: VerInfoUsuarioComponent;
  let fixture: ComponentFixture<VerInfoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
