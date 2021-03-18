import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AssociacaoService } from '../../_services/associacao.service';
import { Associacao } from '../../_models/associacao';
import { ErroService } from '../../_services/erro.service';


@Component({
  selector: 'app-cadastrar-associacao',
  templateUrl: './cadastrar-associacao.component.html',
  styleUrls: ['./cadastrar-associacao.component.scss']
})
export class CadastrarAssociacaoComponent implements OnInit {



  constructor(
    private router: Router,
    private associacaoService: AssociacaoService,
    private _snackBar: MatSnackBar,
    private _erroService: ErroService) { }
  hide = true;
  associacao: Associacao = new Associacao();
  consultaCnpj: string = '';

  identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senhaUsuarioFormControl');
    const confirmarSenha = control.get('confirmarSenhaUsuarioFormControl');

    if (senha.value !== confirmarSenha.value) {
      confirmarSenha.setErrors({ identityRevealed: true });
      return { identityRevealed: true };
    }
    confirmarSenha.setErrors(null);
    return null;
  };

  formCadastro = new FormGroup({
    idFormControl: new FormControl(this.associacaoService.associacao.codigo ? this.associacaoService.associacao.codigo : null),
    cnpjFormControl: new FormControl(this.associacaoService.associacao.cnpj ? this.associacaoService.associacao.cnpj : ''),
    siglaFormControl: new FormControl(this.associacaoService.associacao.sigla ? this.associacaoService.associacao.sigla : ''),
    nomeFormControl: new FormControl(this.associacaoService.associacao.nome ? this.associacaoService.associacao.nome : ''),
    cidadeFormControl: new FormControl(this.associacaoService.associacao.enderecoHttp.cidade ? this.associacaoService.associacao.enderecoHttp.cidade : ''),
    ufFormControl: new FormControl(this.associacaoService.associacao.enderecoHttp.estado ? this.associacaoService.associacao.enderecoHttp.estado : ''),
    logradouroFormControl: new FormControl(this.associacaoService.associacao.enderecoHttp.logradouro ? this.associacaoService.associacao.enderecoHttp.logradouro : ''),
    numeroFormControl: new FormControl(this.associacaoService.associacao.enderecoHttp.numero ? this.associacaoService.associacao.enderecoHttp.numero : ''),
    complementoFormControl: new FormControl(this.associacaoService.associacao.enderecoHttp.complemento ? this.associacaoService.associacao.enderecoHttp.complemento : ''),
    bairroFormControl: new FormControl(this.associacaoService.associacao.enderecoHttp.bairro ? this.associacaoService.associacao.enderecoHttp.bairro : ''),
    cepFormControl: new FormControl(this.associacaoService.associacao.enderecoHttp.cep ? this.associacaoService.associacao.enderecoHttp.cep : ''),
    codigoUsuarioFormControl: new FormControl(this.associacaoService.associacao.usuarioHttp.codigo ? this.associacaoService.associacao.usuarioHttp.codigo : ''),
    emailUsuarioFormControl: new FormControl(this.associacaoService.associacao.usuarioHttp.email ? this.associacaoService.associacao.usuarioHttp.email : '', [Validators.email]),
    senhaUsuarioFormControl: new FormControl(this.associacaoService.associacao.usuarioHttp.senha ? this.associacaoService.associacao.usuarioHttp.senha : ''),
    confirmarSenhaUsuarioFormControl: new FormControl(''),
    tipoUsuarioFormControl: new FormControl('TPUS01')
  }, { validators: this.identityRevealedValidator });

  ngOnInit(): void {

  }

  onSubmit() {
    const {
      idFormControl,
      cnpjFormControl,
      siglaFormControl,
      nomeFormControl,
      cidadeFormControl,
      ufFormControl,
      logradouroFormControl,
      numeroFormControl,
      complementoFormControl,
      bairroFormControl,
      cepFormControl,
      codigoUsuarioFormControl,
      emailUsuarioFormControl,
      senhaUsuarioFormControl,
      confirmarSenhaUsuarioFormControl,
      tipoUsuarioFormControl

    } = this.formCadastro.controls
    this.associacao.codigo = idFormControl.value;
    this.associacao.cnpj = cnpjFormControl.value;
    this.associacao.nome = nomeFormControl.value;
    this.associacao.sigla = siglaFormControl.value;
    this.associacao.enderecoHttp.cidade = cidadeFormControl.value;
    this.associacao.enderecoHttp.estado = ufFormControl.value;
    this.associacao.enderecoHttp.logradouro = logradouroFormControl.value;
    this.associacao.enderecoHttp.numero = numeroFormControl.value;
    this.associacao.enderecoHttp.complemento = complementoFormControl.value;
    this.associacao.enderecoHttp.bairro = bairroFormControl.value;
    this.associacao.enderecoHttp.cep = cepFormControl.value;
    this.associacao.usuarioHttp.codigo = codigoUsuarioFormControl.value;
    this.associacao.usuarioHttp.email = emailUsuarioFormControl.value;
    this.associacao.usuarioHttp.senha = senhaUsuarioFormControl.value;
    this.associacao.usuarioHttp.tipo = tipoUsuarioFormControl.value;

    if (this.consultaCnpj === this.associacao.cnpj) {
      this.openSnackBar('Este CNPJ já está sendo usado', 'OK');
    } else if (this.associacao.codigo === null) {
      this.associacaoService.postAssociacao(this.associacao).subscribe((res) => {
        this.associacaoService.associacao = res;
        this.goToPage('associacao/comprovante-cadastro');
      },(erro) => {
        this._erroService.erro.erro = true;
        this._erroService.erro.codigo = erro.status;
        this._erroService.erro.mensagem = erro.error.Mensagem;
        this.goToPage('erro');
      })
    } else {
      console.log(this.associacao)
      this.associacaoService.putAssociacao(this.associacao).subscribe((res) => {
        this.associacaoService.associacao = res;
        this.goToPage('associacao/comprovante-cadastro');
      },(erro) => {
        this._erroService.erro.erro = true;
        this._erroService.erro.codigo = erro.status;
        this._erroService.erro.mensagem = erro.error.Mensagem;
        this.goToPage('erro');
      })
    }
  }

  consultarCnpj(cnpj: string) {
    this.associacaoService.getAssociacaoPorCnpj(cnpj).subscribe(
      (res) => {
        if (res.cnpj === cnpj) {
          this.consultaCnpj = res.cnpj;
          this.openSnackBar('Este CNPJ já está sendo usando', 'OK');
        }
      })
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 8000,
    });
  }

}
