import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './../_models/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarioPorEmail(email: string){
    return this.http.get<Usuario>('http://localhost:8080/api/usuario/buscar?email=' + email);
  }
}
