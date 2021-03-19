import { Injectable } from '@angular/core';
import { CepConsulta } from '../_models/cepConsulta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepConsultaService {

  constructor(
    private http: HttpClient
  ) {}

  getCep(cep: string){
    return this.http.get<CepConsulta>(`http://viacep.com.br/ws/${cep}/json`);
  }

}
