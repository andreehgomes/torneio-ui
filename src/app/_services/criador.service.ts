import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Criador } from './../_models/criador';
import { Associacao } from './../_models/associacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriadorService {
  criador: Criador = new Criador();
  reload = false;

  constructor(private _http: HttpClient) {}

  getCriadorPorId(id: string): Observable<Criador> {
    return this._http.get<Criador>(`http://localhost:8080/api/criador/${id}`);
  }

  postCriador(criador: Criador): Observable<Criador> {
    return this._http.post<Criador>(
      'http://localhost:8080/api/criador',
      criador
    );
  }

  listarCriador(): Observable<Criador[]> {
    return this._http.get<Criador[]>('http://localhost:8080/api/criador');
  }

  getCriadorPorCpf(cpf: string): Observable<Criador> {
    return this._http.get<Criador>(
      'http://localhost:8080/api/criador/busca/' + cpf
    );
  }

  setAssociacaoHeader(associacao: Associacao) {
    return {
      headers: new HttpHeaders({ associacao: JSON.stringify(associacao) })
    };
  }

  getCriadorPorAssociacao(associacao: Associacao): Observable<any> {
    return this._http.get<Criador[]>(
      'http://localhost:8080/api/criador/associacao',
      this.setAssociacaoHeader(associacao)
    );
  }

  putCriador(criador: Criador): Observable<Criador> {
    return this._http.put<Criador>(
      `http://localhost:8080/api/criador/${criador.codigo}`,
      criador);
  }

  zerarCriador() {
    this.criador = new Criador();
  }
}
