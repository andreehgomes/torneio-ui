import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Criador } from './../_models/criador'

@Injectable({
  providedIn: 'root'
})
export class CriadorService {

  criador: Criador = new Criador();

  constructor(private http: HttpClient) { }

  postCriador(criador: Criador){
    return this.http.post<any>('http://localhost:8080/api/criador', criador);
  }
}
