import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ave } from '../_models/ave';

@Injectable({
  providedIn: 'root'
})
export class AveService {

  ave: Ave = new Ave();

  constructor(private router: Router) { }

  zerarAve(){
    this.ave = new Ave();
  }
}
