import { Injectable } from '@angular/core';
import { Associacao } from '../_models/associacao';
import { Criador } from '../_models/criador';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  associacao: Associacao = new Associacao();
  criador: Criador = new Criador();
  reload = false;

  constructor() { }
}
