import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criador } from '../../_models/criador';

@Component({
  selector: 'app-toolbar-criador',
  templateUrl: './toolbar-criador.component.html',
  styleUrls: ['./toolbar-criador.component.scss']
})
export class ToolbarCriadorComponent implements OnInit {

  status: boolean = false;
  criador: Criador = new Criador();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.criador = JSON.parse(window.sessionStorage.getItem('criador'));
    this.status = this.criador.ativo;
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  close(){
    this.status = true;
  }

}
