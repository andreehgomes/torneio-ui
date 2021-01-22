import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AssociacaoService {

  constructor(private httpClient: HttpClient) { }

  getAssociacaoPorUf(uf: string){
    return this.httpClient.get<any>('http://localhost:8080/associacao/uf/' + uf)
  }
}
