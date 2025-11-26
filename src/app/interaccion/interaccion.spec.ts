import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interaccion } from './interaccion';

describe('Interaccion', () => {
  let component: Interaccion;
  let fixture: ComponentFixture<Interaccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interaccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interaccion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
