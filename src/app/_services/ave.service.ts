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

  getAveTransferencia(criador: Criador): Observable<any> {
    return this._http.get<Ave[]>(
      'http://localhost:8080/api/ave/criador-novo',
      this.setCriadorHeader(criador)
    );
  }

  getAveTransferenciaRealizadas(criador: Criador): Observable<any> {
    return this._http.get<Ave[]>(
      'http://localhost:8080/api/ave/criador-antigo',
      this.setCriadorHeader(criador)
    );
  }

  updateCriador(ave: Ave): Observable<Ave> {
    return this._http.put<Ave>(
      `http://localhost:8080/api/ave/${ave.codigo}`,
      ave
    );
  }

  transferirAve(ave: Ave, criadorNovo: Criador): Observable<Ave> {
    ave.criadorHttpAntigo = ave.criadorHttp;
    ave.criadorHttp = null;
    ave.criadorHttpNovo = criadorNovo;
    return this._http.put<Ave>(
      `http://localhost:8080/api/ave/${ave.codigo}`,
      ave
    );
  }

  aceitarTransferencia(ave: Ave, criadorNovo: Criador): Observable<Ave> {
    ave.criadorHttp = criadorNovo;
    ave.criadorHttpAntigo = null;
    ave.criadorHttpNovo = null;
    return this._http.put<Ave>(
      `http://localhost:8080/api/ave/${ave.codigo}`,
      ave
    )
  }

  recusarTransferencia(ave: Ave): Observable<Ave> {
    ave.criadorHttp = ave.criadorHttpAntigo;
    ave.criadorHttpAntigo = null;
    ave.criadorHttpNovo = null;
    return this._http.put<Ave>(
      `http://localhost:8080/api/ave/${ave.codigo}`,
      ave
    )
  }


  updateAve(ave: Ave): Observable<Ave> {
    return this._http.put<Ave>(
      `http://localhost:8080/api/ave/${ave.codigo}`,
      ave
    );
  }
}
