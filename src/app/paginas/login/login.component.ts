import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from 'src/app/_models/usuario';
import { Criador } from './../../_models/criador';
import { Associacao } from './../../_models/associacao';
import { UsuarioService } from '../../_services/usuario.service';
import { CriadorService } from 'src/app/_services/criador.service';
import { AssociacaoService } from 'src/app/_services/associacao.service';
import { Location } from '@angular/common';
import { ErroService } from '../../_services/erro.service';
import { LoginService } from '../../_services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {
  erroCriador = false;
  erroAssociacao = false;
  hide = true;
  usuario: Usuario = new Usuario();
  criador: Criador = new Criador();
  associacao: Associacao = new Associacao();

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private criadorService: CriadorService,
    private associacaoService: AssociacaoService,
    private location: Location,
    private _erroService: ErroService,
    private _loginService: LoginService) { }

  formControlCriador = new FormGroup({
    cpfFormControl: new FormControl(),
    senhaFormControl: new FormControl()
  })

  formControlAssociacao = new FormGroup({
    cnpjFormControl: new FormControl(),
    senhaFormControl: new FormControl()
  })

  ngOnInit(): void {
  }

  onSubmitCriador() {
    const {
      cpfFormControl,
      senhaFormControl
    } = this.formControlCriador.controls;

    this.criadorService.getCriadorPorCpf(cpfFormControl.value).subscribe((res) => {
      this.criador = res;
      window.sessionStorage.setItem('criador', JSON.stringify(this.criador));
      this._loginService.reload = true;
      this.goToPage('');
    },
      (error) => {
        this.error(error, 'criador');
      })
  }

  onSubmitAssociacao() {
    const {
      cnpjFormControl,
      senhaFormControl
    } = this.formControlAssociacao.controls;

    this.associacaoService.getAssociacaoPorCnpj(cnpjFormControl.value).subscribe((res) => {
      this.associacao = res;
      window.sessionStorage.setItem('associacao', JSON.stringify(this.associacao));
      this._loginService.reload = true;
      this.goToPage('');
    },
      (error) => {
        this.error(error, 'associacao');
      })

  }

  error(error: any, login: string) {
    if (error.status === 404) {
      if (login === 'criador') {
        this.erroCriador = true;
      } else if (login === 'associacao') {
        this.erroAssociacao = true;
      }
    } else {
      this._erroService.erro.erro = true;
      this._erroService.erro.codigo = '500';
      this._erroService.erro.mensagem = 'Erro inesperado do servidor';
      this.goToPage('erro');
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
