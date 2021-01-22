import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Endereco } from './../_models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  endereco: Endereco = new Endereco();

  constructor(private http: HttpClient) { }

postEndereco(endereco: Endereco){
  return this.http.post<Endereco>('http://localhost:8080/enderecos', endereco);
}

}
