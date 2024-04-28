import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasDeAtributoComponent } from './directivas-de-atributo.component';

describe('DirectivasDeAtributoComponent', () => {
  let component: DirectivasDeAtributoComponent;
  let fixture: ComponentFixture<DirectivasDeAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivasDeAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivasDeAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
