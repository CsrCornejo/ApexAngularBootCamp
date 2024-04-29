import { TestBed } from '@angular/core/testing';

import { InyectedServiceService } from './inyected-service.service';

describe('InyectedServiceService', () => {
  let service: InyectedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InyectedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
