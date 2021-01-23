import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Torneio } from '../_models/torneio';

@Injectable({
  providedIn: 'root'
})
export class TorneiosService {

  constructor(private _http: HttpClient) { }

  getTorneios(): Observable<Torneio> {
    return this._http.get<Torneio>('http://localhost:8080/torneios');
  }
}
