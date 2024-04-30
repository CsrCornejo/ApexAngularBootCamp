import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1Component } from './z1.component';

describe('Z1Component', () => {
  let component: Z1Component;
  let fixture: ComponentFixture<Z1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Z1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Z1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
