import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorneiosService } from '../../_services/torneios.service';
import { ErroService } from '../../_services/erro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status = false;

  constructor(
    private router: Router,
    private _torneioService: TorneiosService,
    public _erroService: ErroService) { }

  ngOnInit() {
    this._torneioService.getTorneios().subscribe(res => {
    }, (erro) => {
      if(erro.status === 404){
        this.status = true;
        this._erroService.erro.erro = true;
        this._erroService.erro.codigo = erro.status;
        this._erroService.erro.mensagem = 'Não encontramos nenhum torneio aberto no mommento.'
      }
    });
  }

  close(){
    this.status = false;
  }

}
