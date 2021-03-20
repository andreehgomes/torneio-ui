import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Associacao } from './../../_models/associacao';
import { Criador } from './../../_models/criador';
import { Endereco } from './../../_models/endereco';
import { AssociacaoService } from './../../_services/associacao.service';
import { CriadorService } from './../../_services/criador.service';
import { EnderecoService } from './../../_services/endereco.service';
import { MatDialog } from '@angular/material/dialog';
import { TermoDeResponsabilidadeComponent } from 'src/app/modals/termo-de-responsabilidade/termo-de-responsabilidade.component';
import { Usuario } from 'src/app/_models/usuario';
import { ErroService } from '../../_services/erro.service';
import { CepConsultaService } from 'src/app/_services/cep-consulta.service';

@Component({
  selector: 'app-cadastrar-criador',
  templateUrl: './cadastrar-criador.component.html',
  styleUrls: ['./cadastrar-criador.component.scss']
})
export class CadastrarCriadorComponent implements OnInit {
  hide = true;
  aceiteTermos = false;
  associacao: Array<Associacao> = [];
  criador: Criador = new Criador();
  endereco: Endereco = new Endereco();

  constructor(
    private associacaoService: AssociacaoService,
    public criadorService: CriadorService,
    private enderecoService: EnderecoService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _erroService: ErroService,
    private _cepConsultaService: CepConsultaService) {
  }


  identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senhaFormControl');
    const confirmarSenha = control.get('confirmarSenhaFormControl');

    if (senha.value !== confirmarSenha.value) {
      confirmarSenha.setErrors({ identityRevealed: true });
      return { identityRevealed: true };
    }
    confirmarSenha.setErrors(null);
    return null;
  };

  // identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   const senha = control.get('senhaFormControl');
  //   const confirmarSenha = control.get('confirmarSenhaFormControl');

  //   return senha.value !== confirmarSenha.value ? { identityRevealed: true } : null;
  // };

  // forbiddenNameValidator(nameRe: string): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} | null => {
  //     const forbidden = nameRe;
  //     return forbidden !== control.value ? {forbiddenName: {value: control.value}} : null;
  //   };
  // }

  formCadastro = new FormGroup({
    nomeFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.nome : ''),
    sobrenomeFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.sobrenome : ''),
    celularFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.telefone : ''),
    emailFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.usuarioHttp.email : '', [Validators.email]),
    cpfFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.cpf : ''),
    rgFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.rg : ''),
    ctfFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.ctf : ''),
    ufClubeFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.associacaoHttp.enderecoHttp.estado : ''),
    clubeFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.associacaoHttp : ''),
    ruaFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.enderecoHttp.logradouro : ''),
    numeroFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.enderecoHttp.numero : ''),
    bairroFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.enderecoHttp.bairro : ''),
    cepFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.enderecoHttp.cep : ''),
    cidadeFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.enderecoHttp.cidade : ''),
    ufEnderecoFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.enderecoHttp.estado : ''),
    complementoFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.enderecoHttp.complemento : ''),
    senhaFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.usuarioHttp.senha : ''),
    confirmarSenhaFormControl: new FormControl(this.criadorService.criador ? this.criadorService.criador.usuarioHttp.senha : ''),
    aceiteTermosFormControl: new FormControl(this.criadorService.criador ? true : false),
    tipoUsuarioFormControl: new FormControl('TPUS02'),
    ativoFormControl: new FormControl(true)
  }, { validators: this.identityRevealedValidator });

  ngOnInit(): void {
  }

  buscaAssociacaoPorUf(event: any) {
    // this.associacaoService.getAssociacaoPorUf(event.value).subscribe((res) => {
    //   this.associacao = res;
    // })
    this.associacaoService.listarAssociacao().subscribe((res) => {
      this.associacao = res;
    })
  }

  onSubmit() {
    const {
      nomeFormControl,
      sobrenomeFormControl,
      celularFormControl,
      emailFormControl,
      cpfFormControl,
      rgFormControl,
      ctfFormControl,
      ufClubeFormControl,
      clubeFormControl,
      ruaFormControl,
      numeroFormControl,
      bairroFormControl,
      cepFormControl,
      cidadeFormControl,
      ufEnderecoFormControl,
      complementoFormControl,
      senhaFormControl,
      confirmarSenhaFormControl,
      aceiteTermosFormControl,
      tipoUsuarioFormControl,
      ativoFormControl

    } = this.formCadastro.controls
    this.criador.nome = nomeFormControl.value;
    this.criador.sobrenome = sobrenomeFormControl.value;
    this.criador.ctf = ctfFormControl.value;
    this.criador.rg = rgFormControl.value;
    this.criador.telefone = celularFormControl.value;
    this.criador.cpf = cpfFormControl.value;
    this.criador.ativo = ativoFormControl.value;
    this.criador.enderecoHttp.bairro = bairroFormControl.value;
    this.criador.enderecoHttp.cep = cepFormControl.value;
    this.criador.enderecoHttp.cidade = cidadeFormControl.value;
    this.criador.enderecoHttp.logradouro = ruaFormControl.value;
    this.criador.enderecoHttp.numero = numeroFormControl.value;
    this.criador.enderecoHttp.estado = ufEnderecoFormControl.value;
    this.criador.enderecoHttp.complemento = complementoFormControl.value;
    this.criador.usuarioHttp.email = emailFormControl.value;
    this.criador.usuarioHttp.senha = senhaFormControl.value;
    this.criador.usuarioHttp.tipo = tipoUsuarioFormControl.value;
    this.criador.associacaoHttp = clubeFormControl.value;

    if (this.criadorService.criador.codigo) {
      this.criador.codigo = this.criadorService.criador.codigo;
      this.criador.usuarioHttp.codigo = this.criadorService.criador.usuarioHttp.codigo;
      console.log(this.criador)
      console.log(this.criador.codigo)
      this.criadorService.putCriador(this.criador).subscribe((res) => {
        this.criadorService.criador = res;
        window.sessionStorage.setItem('criador', JSON.stringify(res));
        this.goToPage('criador/comprovante-cadastro');
      }, (erro) => {
        if (erro.status !== 400) {
          this._erroService.erro.erro = true;
          this._erroService.erro.codigo = erro.status;
          this._erroService.erro.mensagem = erro.error.Mensagem;
          this.goToPage('erro');
        } else {
          this._erroService.erro.erro = true;
          this._erroService.erro.codigo = erro.status;
          this._erroService.erro.mensagem = erro.message;
          this.goToPage('erro');
        }
      })
    } else {
      this.criadorService.postCriador(this.criador).subscribe((res) => {
        this.criadorService.criador = res;
        this.goToPage('criador/comprovante-cadastro');
      }, (erro) => {
        if (erro.status !== 400) {
          this._erroService.erro.erro = true;
          this._erroService.erro.codigo = erro.status;
          this._erroService.erro.mensagem = erro.error.Mensagem;
          this.goToPage('erro');
        } else {
          this._erroService.erro.erro = true;
          this._erroService.erro.codigo = erro.status;
          this._erroService.erro.mensagem = erro.message;
          this.goToPage('erro');
        }
      });
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 8000,
    });
  }

  openDialog() {
    this.dialog.open(TermoDeResponsabilidadeComponent);
  }

  getCep(cep: string) {
    this._cepConsultaService.getCep(cep).subscribe((res) => {
      console.log(res);
      if (res.erro) {
        this.formCadastro.controls['cepFormControl'].setErrors({ invalid: true })
      } else {
        res.localidade !== "" ? this.formCadastro.controls['cidadeFormControl'].setValue(res.localidade) : this.formCadastro.controls['cidadeFormControl'].setValue(null);
        res.uf !== "" ? this.formCadastro.controls['ufEnderecoFormControl'].setValue(res.uf) : this.formCadastro.controls['ufEnderecoFormControl'].setValue(null);
        res.logradouro !== "" ? this.formCadastro.controls['ruaFormControl'].setValue(res.logradouro) : this.formCadastro.controls['ruaFormControl'].setValue(null);
        res.logradouro !== "" ? this.formCadastro.controls['numeroFormControl'].setValue('0') : this.formCadastro.controls['numeroFormControl'].setValue(null);
        res.bairro !== "" ? this.formCadastro.controls['bairroFormControl'].setValue(res.bairro) : this.formCadastro.controls['bairroFormControl'].setValue(null);
        res.complemento !== "" ? this.formCadastro.controls['complementoFormControl'].setValue(res.complemento) :
          res.bairro !== "" ? this.formCadastro.controls['complementoFormControl'].setValue(res.bairro) : this.formCadastro.controls['complementoFormControl'].setValue(null);
      }
    })
  }

}
