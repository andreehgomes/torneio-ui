import { Injectable } from '@angular/core';
import { Especie } from '../_models/especie';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {

  especie: Especie = new Especie();
  listaEspecie: Array<Especie> = [];

  constructor(private http: HttpClient) { }

  listarEspecies(): Observable<any>{
    return this.http.get<Especie[]>('http://localhost:8080/api/especie');
  }

  incluirEspecie(especie: Especie): Observable<any>{
    return this.http.post<Especie>('http://localhost:8080/api/especie', especie);
  }

  atualizarEspecie(especie: Especie): Observable<any>{
    return this.http.put<Especie>('http://localhost:8080/api/especie/' + especie.codigo, especie);
  }

  zerarEspecie(){
    this.especie = new Especie();
  }
}
