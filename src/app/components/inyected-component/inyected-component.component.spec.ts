import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyectedComponentComponent } from './inyected-component.component';

describe('InyectedComponentComponent', () => {
  let component: InyectedComponentComponent;
  let fixture: ComponentFixture<InyectedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InyectedComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InyectedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
