import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { CriadorService } from './_services/criador.service'
import { AssociacaoService } from './_services/associacao.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  criador: string;
  associacao: string;

  constructor(
    private router: Router, 
    private location: Location, 
    private criadorService: CriadorService,
    private associacaoService: AssociacaoService) {
    this.reload();
    this.criador = window.sessionStorage.getItem('criador');
    this.associacao = window.sessionStorage.getItem('associacao');
  }

  ngOnInit(): void {    
    this.criador = window.sessionStorage.getItem('criador');
    this.associacao = window.sessionStorage.getItem('associacao');
    this.goToHome();
  }

  goToHome() {
    this.router.navigate(["home"]);
  }

  reload() {
    console.log('IF: ', this.criadorService.reload);
    if(this.criadorService.reload || this.associacaoService.reload){
      console.log('ENTROU NO IF')
      this.criadorService.reload = false;
      this.associacaoService.reload = false;
      location.reload();
    }
  }
}
