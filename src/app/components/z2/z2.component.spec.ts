import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z2Component } from './z2.component';

describe('Z2Component', () => {
  let component: Z2Component;
  let fixture: ComponentFixture<Z2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Z2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Z2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
