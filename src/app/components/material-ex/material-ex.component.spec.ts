import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExComponent } from './material-ex.component';

describe('MaterialExComponent', () => {
  let component: MaterialExComponent;
  let fixture: ComponentFixture<MaterialExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
