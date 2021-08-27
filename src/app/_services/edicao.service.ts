import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edicao } from '../_models/edicao';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campeonato } from '../_models/campeonato';

@Injectable({
  providedIn: 'root'
})
export class EdicaoService {

  edicao: Edicao = new Edicao();
  edicaoList: Array<Edicao> = [];

  constructor(private _http: HttpClient) { }

  setCampeonatoHeader(campeonato: Campeonato) {
    return { headers: new HttpHeaders({ campeonato: JSON.stringify(campeonato) }) };
  }

  IncluirEdicao(edicao: Edicao): Observable<Edicao>{
    return this._http.post<Edicao>('http://localhost:8080/api/edicao', edicao);
  }

  getListEdicao(campeonato: Campeonato): Observable<Edicao[]> {
    return this._http.get<Edicao[]>('http://localhost:8080/api/edicao/campeonato', this.setCampeonatoHeader(campeonato));
  }
}
