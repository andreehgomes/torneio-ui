import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Associacao } from 'src/app/_models/associacao';
import { Criador } from 'src/app/_models/criador';
import { CriadorService } from 'src/app/_services/criador.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar-associacao',
  templateUrl: './toolbar-associacao.component.html',
  styleUrls: ['./toolbar-associacao.component.scss']
})
export class ToolbarAssociacaoComponent implements OnInit {

  statusVerde: boolean = false;
  associacao: Associacao = new Associacao();
  criadorList: Array<Criador> = [];

  constructor(
    private router: Router,
    private _criadorService: CriadorService) { }

  ngOnInit(): void {
    this.associacao = JSON.parse(window.sessionStorage.getItem('associacao'));
    this._criadorService.getCriadorPorAssociacao(this.associacao, environment.solicitacoesCriadoresPendentes)
      .subscribe((res) => {
        this.criadorList = res;
        if(this.criadorList.length > 0){
          this.statusVerde = true;
        }
      })
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  close(status: string){
    if(status === 'statusVerde'){
      this.statusVerde = false;
    }
  }

  abrirListaDeSolicitacoes(){
    this.router.navigate(['ave/listar-solicitacoes-criadores']);
    this.statusVerde = false;
  }
}
