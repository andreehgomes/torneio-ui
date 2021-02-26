import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Ave } from '../_models/ave';

@Injectable({
  providedIn: 'root'
})
export class AveService {

  ave: Ave = new Ave();

  constructor(
    private http: HttpClient) { }

  zerarAve(){
    this.ave = new Ave();
  }

  incluirAve(ave: Ave){
    return this.http.post<Ave>('http://localhost:8080/api/ave', ave);
  }
}
