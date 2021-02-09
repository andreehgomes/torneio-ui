import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from 'src/app/_models/usuario';
import { Criador } from './../../_models/criador';
import { Associacao } from './../../_models/associacao';
import { UsuarioService } from '../../_services/usuario.service';
import { CriadorService } from 'src/app/_services/criador.service';
import { AssociacaoService } from 'src/app/_services/associacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {
  hide = true;
  usuario: Usuario = new Usuario();
  criador: Criador = new Criador();
  associacao: Associacao = new Associacao();

  constructor(
    private router: Router, 
    private usuarioService: UsuarioService,
    private criadorService: CriadorService,
    private associacaoService: AssociacaoService) { }

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
      console.log(this.criador);
    })

  }

  onSubmitAssociacao() {
    const {
      cnpjFormControl,
      senhaFormControl
    } = this.formControlAssociacao.controls;

    this.associacaoService.getAssociacaoPorCnpj(cnpjFormControl.value).subscribe((res) => {
      this.associacao = res;
      console.log(this.associacao);
    })

  }

  login(email: string) {
    this.usuarioService.getUsuarioPorEmail(email).subscribe((res) => {
      console.log(res);
    })
  }

}
