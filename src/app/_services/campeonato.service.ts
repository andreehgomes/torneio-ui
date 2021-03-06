import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campeonato } from '../_models/campeonato';
import { Associacao } from '../_models/associacao';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  campeonato: Campeonato = new Campeonato();

  constructor(private _http: HttpClient) { }

  setAssociacaoHeader(associacao: Associacao) {
    return { headers: new HttpHeaders({ associacao: JSON.stringify(associacao) }) };
  }

  getCampeaonatoPorAssociacao(associacao: Associacao): Observable<any> {
    return this._http.get<Associacao[]>('http://localhost:8080/api/campeonato/associacao', this.setAssociacaoHeader(associacao));
  }

  postCampeonato(campeonato: Campeonato): Observable<any> {
    return this._http.post<Campeonato>('http://localhost:8080/api/campeonato', campeonato);
  }

  putCampeonato(campeonato: Campeonato): Observable<any> {
    return this._http.put<Campeonato>('http://localhost:8080/api/campeonato', campeonato);
  }
}
