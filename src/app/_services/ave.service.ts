import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ave } from '../_models/ave';
import { Criador } from '../_models/criador';

@Injectable({
  providedIn: 'root'
})
export class AveService {
  ave: Ave = new Ave();

  constructor(private _http: HttpClient) {}

  zerarAve() {
    this.ave = new Ave();
  }

  updateCriador(criador: Criador): Observable<Ave> {
    return this._http.put<Ave>(
      `http://localhost:8080/api/ave/${criador.codigo}`,
      criador
    );
  }
}
