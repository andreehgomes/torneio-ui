import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AveService } from '../../_services/ave.service';
import { Ave } from '../../_models/ave';
import { Criador } from '../../_models/criador';
import { ErroService } from '../../_services/erro.service';

@Component({
  selector: 'app-listar-transferencias',
  templateUrl: './listar-transferencias.component.html',
  styleUrls: ['./listar-transferencias.component.scss']
})
export class ListarTransferenciasComponent implements OnInit {

  panelOpenState = false;
  flagAveList = false;
  aveList: Array<Ave> = [];
  criador: Criador = new Criador();

  constructor(
    private router: Router,
    private _aveService: AveService,
    private _erroService: ErroService
  ) {
    this.loadData();
  }

  loadData() {
    this.criador = JSON.parse(window.sessionStorage.getItem('criador'));
    this._aveService.getAveTransferencia(this.criador).subscribe((res) => {
      console.log('aveList: ', res);
      this.aveList = res;
      this.flagAveList = true;
    }, (erro) => {
      if (erro.status === 404) {
        this.flagAveList = false;
      } else {
        console.log(erro)
        this._erroService.erro.erro = true;
        this._erroService.erro.codigo = erro.error.status;
        this._erroService.erro.mensagem = erro.message;
        this.goToPage('erro');
      }
    })
  }

  ngOnInit(): void {
  }

  aceitarTransferencia(ave: Ave) {
    this._aveService.aceitarTransferencia(ave, this.criador).subscribe((res) => {
      this.aveList.splice(this.aveList.indexOf(ave), 1);
      console.log(this.aveList);
      console.log(res);
    }, (erro) => {
      console.log(erro)
      this._erroService.erro.erro = true;
      this._erroService.erro.codigo = erro.error.status;
      this._erroService.erro.mensagem = erro.message;
      this.goToPage('erro');
    })
    console.log('Aceitar: ', ave);
  }
  recusarTransferencia(ave: Ave) {
    this._aveService.recusarTransferencia(ave).subscribe((res) => {
      this.aveList.splice(this.aveList.indexOf(ave), 1);
      console.log(this.aveList);
      console.log(res);
    }, (erro) => {
      console.log(erro)
      this._erroService.erro.erro = true;
      this._erroService.erro.codigo = erro.error.status;
      this._erroService.erro.mensagem = erro.message;
      this.goToPage('erro');
    })
    console.log('Recusar: ', ave);
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
