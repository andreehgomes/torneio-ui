import { Injectable } from '@angular/core';
import { Erro } from '../_models/erro';

@Injectable({
  providedIn: 'root'
})
export class ErroService {

  erro: Erro = new Erro();

  constructor() { }
}
