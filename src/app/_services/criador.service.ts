import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Criador } from './../_models/criador'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriadorService {

  criador: Criador = new Criador();

  constructor(private http: HttpClient) { }

  postCriador(criador: Criador){
    return this.http.post<any>('http://localhost:8080/api/criador', criador);
  }

  listarCriador(): Observable<any>{
    return this.http.get<Criador[]>('http://localhost:8080/api/criador');
  }

  zerarCriador(){
    this.criador = new Criador();
  }
}
