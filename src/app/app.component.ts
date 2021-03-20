import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CriadorService } from './_services/criador.service';
import { AssociacaoService } from './_services/associacao.service';
import { LoginService } from './_services/login.service';

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
    private associacaoService: AssociacaoService,
    private _loginService: LoginService) {
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
    console.log('IF: ', this._loginService.reload);
    if(this._loginService.reload){
      console.log('ENTROU NO IF')
      this._loginService.reload = false;
      location.reload();
    }
  }
}
