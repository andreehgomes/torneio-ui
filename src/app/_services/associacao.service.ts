import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Associacao } from "../_models/associacao";
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssociacaoService {

  reload = false;

  associacao: Associacao = new Associacao();
  associacoes: Array<Associacao> = []

  constructor(private httpClient: HttpClient) { }

  getAssociacaoPorUf(uf: string) {
    return this.httpClient.get<any>('http://localhost:8080/associacao/uf/' + uf)
  }

  postAssociacao(associacao: Associacao) {
    return this.httpClient.post<Associacao>('http://localhost:8080/api/associacao', associacao);
  }

  getAssociacaoPorCnpj(cnpj: string): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/api/associacao/busca/' + cnpj);
  }

  listarAssociacao(): Observable<any>{
    return this.httpClient.get<Associacao[]>('http://localhost:8080/api/associacao');
  }

  putAssociacao(associacao: Associacao): Observable<any> {
    return this.httpClient.put<Associacao>('http://localhost:8080/api/associacao/' + associacao.codigo, associacao);
  }

  zerarAssociacao(){
    this.associacao = new Associacao();
  }

}
