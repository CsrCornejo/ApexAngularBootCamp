import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyectedComponent } from './inyected-component.component';

describe('InyectedComponent', () => {
  let component: InyectedComponent;
  let fixture: ComponentFixture<InyectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InyectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InyectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
