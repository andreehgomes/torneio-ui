import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Criador } from './../_models/criador';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CriadorService {
  public criador: Criador = new Criador();

  public constructor(private _http: HttpClient) {}

  public getCriadorPorId(id: string): Observable<Criador> {
    return this._http.get<Criador>(`http://localhost:8080/api/criador/${id}`);
  }

  public postCriador(criador: Criador): Observable<Criador> {
    return this._http.post<Criador>(
      'http://localhost:8080/api/criador',
      criador
    );
  }
}
