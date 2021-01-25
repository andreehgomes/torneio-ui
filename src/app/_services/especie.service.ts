import { Injectable } from '@angular/core';
import { Especie } from '../_models/especie';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {

  especie: Especie = new Especie();
  listaEspecie: Array<Especie> = [
    {id: 1, nome: 'Pardal', nomecientifico: 'Pardals'},
    {id: 2,nome: 'Canário terra', nomecientifico: 'Canárius'},
    {id: 3,nome: 'Trinca Ferro', nomecientifico: 'Trinquis Ferrius'},
    {id: 4,nome: 'Azulão', nomecientifico: 'Azulãozius'},
    {id: 5,nome: 'Curió', nomecientifico: 'Curiózis'},    
  ];

  constructor(private http: HttpClient) { }

  listarEspecies(): Observable<any>{
    return this.http.get<Especie[]>('http://localhost:8080/especies');
  }

  zerarEspecie(){
    this.especie = new Especie();
  }
}
