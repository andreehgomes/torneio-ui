import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criador } from '../../_models/criador';
import { Associacao } from '../../_models/associacao';
import { CriadorService } from '../../_services/criador.service';
import { AssociacaoService } from '../../_services/associacao.service';

@Component({
  selector: 'app-toolbar-principal',
  templateUrl: './toolbar-principal.component.html',
  styleUrls: ['./toolbar-principal.component.scss']
})
export class ToolbarPrincipalComponent implements OnInit {

  criador: Criador = new Criador();
  associacao: Associacao = new Associacao();

  constructor(
    private router: Router,
    private criadorService: CriadorService,
    private associacaoService: AssociacaoService) {
    this.criador = JSON.parse(window.sessionStorage.getItem('criador'));
    this.associacao = JSON.parse(window.sessionStorage.getItem('associacao'));
  }

  ngOnInit(): void {
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  sair(){
    window.sessionStorage.removeItem('criador');
    window.sessionStorage.removeItem('associacao');
    this.criadorService.reload = true;
    this.associacaoService.reload = true;
    this.goToPage('/');
  }
}
