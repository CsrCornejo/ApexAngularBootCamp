import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreDialogComponent } from './nombre-dialog.component';

describe('NombreDialogComponent', () => {
  let component: NombreDialogComponent;
  let fixture: ComponentFixture<NombreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombreDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NombreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
