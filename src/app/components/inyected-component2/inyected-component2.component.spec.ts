import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inyected2Component } from './inyected-component2.component';

describe('Inyected2Component', () => {
  let component: Inyected2Component;
  let fixture: ComponentFixture<Inyected2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inyected2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inyected2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
