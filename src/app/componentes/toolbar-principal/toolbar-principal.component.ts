import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criador } from '../../_models/criador';
import { Associacao } from '../../_models/associacao';
import { CriadorService } from '../../_services/criador.service';
import { AssociacaoService } from '../../_services/associacao.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalhaCriadorLogadoComponent } from '../../modals/detalha-criador-logado/detalha-criador-logado.component';

@Component({
  selector: 'app-toolbar-principal',
  templateUrl: './toolbar-principal.component.html',
  styleUrls: ['./toolbar-principal.component.scss']
})
export class ToolbarPrincipalComponent implements OnInit {

  criador: Criador = new Criador();
  associacao: Associacao = new Associacao();

  constructor(
    private dialog: MatDialog,
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

  sair() {
    window.sessionStorage.removeItem('criador');
    window.sessionStorage.removeItem('associacao');
    this.criadorService.reload = true;
    this.associacaoService.reload = true;
    this.goToPage('/');
  }

  consultarDadosLogado() {
    if (this.criador) {
      this.criadorService.criador = this.criador;
      this.openDialog(this.criador);
    } else if (this.associacao) {
      this.associacaoService.associacao = this.associacao;
      console.log(this.associacao);
    }
  }

  openDialog(criador?: Criador, associacao?: Associacao) {
    if (criador) {
      const dialogRef = this.dialog.open(DetalhaCriadorLogadoComponent, {
        width: '750px',
        data: criador
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Modal detalha criador fechada');
      });
    }
  }
}
