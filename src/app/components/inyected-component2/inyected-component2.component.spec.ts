import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyectedComponent2Component } from './inyected-component2.component';

describe('InyectedComponent2Component', () => {
  let component: InyectedComponent2Component;
  let fixture: ComponentFixture<InyectedComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InyectedComponent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InyectedComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
