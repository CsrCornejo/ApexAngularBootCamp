import { TestBed } from '@angular/core/testing';

import { InyectedService } from './inyected-service.service';

describe('InyectedService', () => {
  let service: InyectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InyectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
