import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Criador } from './../_models/criador'
import { Associacao } from './../_models/associacao'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriadorService {

  criador: Criador = new Criador();
  reload = false;

  constructor(private http: HttpClient) { }

  postCriador(criador: Criador){
    return this.http.post<any>('http://localhost:8080/api/criador', criador);
  }

  listarCriador(): Observable<Criador[]>{
    return this.http.get<Criador[]>('http://localhost:8080/api/criador');
  }

  getCriadorPorCpf(cpf: string): Observable<Criador>{
    return this.http.get<Criador>('http://localhost:8080/api/criador/busca/' + cpf)
  }

  setAssociacaoHeader(associacao: Associacao){
    return {headers: new HttpHeaders({"associacao": JSON.stringify(associacao)})}
  }

  getCriadorPorAssociacao(associacao: Associacao): Observable<any>{
    return this.http.get<Criador[]>('http://localhost:8080/api/criador/associacao', this.setAssociacaoHeader(associacao));
  }

  zerarCriador(){
    this.criador = new Criador();
  }
}
