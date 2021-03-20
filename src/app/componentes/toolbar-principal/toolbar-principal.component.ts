import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criador } from '../../_models/criador';
import { Associacao } from '../../_models/associacao';
import { CriadorService } from '../../_services/criador.service';
import { AssociacaoService } from '../../_services/associacao.service';
import { LoginService } from '../../_services/login.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalhaCriadorLogadoComponent } from '../../modals/detalha-criador-logado/detalha-criador-logado.component';
import { DetalhaAssociacaoLogadaComponent } from '../../modals/detalha-associacao-logada/detalha-associacao-logada.component'

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
    public criadorService: CriadorService,
    public associacaoService: AssociacaoService,
    public _loginService: LoginService) {
    this._loginService.criador = JSON.parse(window.sessionStorage.getItem('criador'));
    this._loginService.associacao = JSON.parse(window.sessionStorage.getItem('associacao'));
  }

  ngOnInit(): void {
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  sair() {
    window.sessionStorage.removeItem('criador');
    window.sessionStorage.removeItem('associacao');
    this._loginService.reload = true;
    this._loginService.reload = true;
    this.goToPage('/');
  }

  consultarDadosLogado() {
    if (this._loginService.criador) {
      this.openDialog(this._loginService.criador, 'TPUS02');
    } else if (this._loginService.associacao) {
      this.openDialog(this._loginService.associacao, 'TPUS01')
    }
  }

  openDialog(data: any, tipoUsuario: string) {
    if (tipoUsuario === 'TPUS02') {
      const dialogRef = this.dialog.open(DetalhaCriadorLogadoComponent, {
        width: '750px',
        data: data
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Modal detalha criador fechada');
      });
    }
    if (tipoUsuario === 'TPUS01') {
      const dialogRef = this.dialog.open(DetalhaAssociacaoLogadaComponent, {
        width: '750px',
        data: data
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Modal detalha associção fechada');
      });
    }
  }
}
