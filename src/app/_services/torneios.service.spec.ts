import { TestBed } from '@angular/core/testing';

import { TorneiosService } from './torneios.service';

describe('TorneiosService', () => {
  let service: TorneiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorneiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
