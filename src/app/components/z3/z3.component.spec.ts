import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z3Component } from './z3.component';

describe('Z3Component', () => {
  let component: Z3Component;
  let fixture: ComponentFixture<Z3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Z3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Z3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
