import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasCustomComponent } from './directivas-custom.component';

describe('DirectivasCustomComponent', () => {
  let component: DirectivasCustomComponent;
  let fixture: ComponentFixture<DirectivasCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivasCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivasCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
