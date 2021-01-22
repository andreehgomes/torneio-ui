import { TestBed } from '@angular/core/testing';

import { CriadorService } from './criador.service';

describe('CriadorService', () => {
  let service: CriadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
