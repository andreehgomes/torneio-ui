import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Erro } from '../../_models/erro';
import { ErroService } from '../../_services/erro.service';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.scss']
})
export class ErroComponent implements OnInit {

  erro: boolean = false;
  codigoErro: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private _erroService: ErroService) { }

  ngOnInit(): void {
    if(this._erroService.erro.erro){
      console.log(this._erroService.erro)
      this.erro = this._erroService.erro.erro;
      this.codigoErro = this._erroService.erro.codigo;
      this.mensagemErro = this._erroService.erro.mensagem;
    }
  }

  goToPage(pagina: String){
    this.router.navigate([`${pagina}`]);
  }

}
