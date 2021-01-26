import { TestBed } from '@angular/core/testing';

import { AveService } from './ave.service';

describe('AveService', () => {
  let service: AveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
