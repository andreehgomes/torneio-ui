import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  incluirAve(ave: Ave) {
    return this._http.post<Ave>('http://localhost:8080/api/ave', ave);
  }

  setCriadorHeader(criador: Criador) {
    return { headers: new HttpHeaders({ criador: JSON.stringify(criador) }) };
  }

  getAvePorCriador(criador: Criador): Observable<any> {
    return this._http.get<Ave[]>(
      'http://localhost:8080/api/ave/criador',
      this.setCriadorHeader(criador)
    );
  }

  updateCriador(criador: Criador): Observable<Ave> {
    return this._http.put<Ave>(
      `http://localhost:8080/api/ave/${criador.codigo}`,
      criador
    );
  }
}
