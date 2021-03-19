import { TestBed } from '@angular/core/testing';

import { CepConsultaService } from './cep-consulta.service';

describe('CepConsultaService', () => {
  let service: CepConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
