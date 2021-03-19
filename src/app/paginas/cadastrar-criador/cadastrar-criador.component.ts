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
    private criadorService: CriadorService,
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
    nomeFormControl: new FormControl(),
    sobrenomeFormControl: new FormControl(),
    celularFormControl: new FormControl(),
    emailFormControl: new FormControl('',[Validators.email]),
    cpfFormControl: new FormControl(),
    rgFormControl: new FormControl(),
    ctfFormControl: new FormControl(),
    ufClubeFormControl: new FormControl(),
    clubeFormControl: new FormControl(),
    ruaFormControl: new FormControl(),
    numeroFormControl: new FormControl(),
    bairroFormControl: new FormControl(),
    cepFormControl: new FormControl(),
    cidadeFormControl: new FormControl(),
    ufEnderecoFormControl: new FormControl(),
    complementoFormControl: new FormControl(),
    senhaFormControl: new FormControl(),
    confirmarSenhaFormControl: new FormControl(),
    aceiteTermosFormControl: new FormControl(),
    tipoUsuarioFormControl: new FormControl('TPUS02'),
    ativoFormControl:new FormControl(true)
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

    this.criadorService.postCriador(this.criador).subscribe((res) => {
      this.criadorService.criador = res;
      this.goToPage('criador/comprovante-cadastro');
    }, (erro) => {
      this._erroService.erro.erro = true;
      this._erroService.erro.codigo = erro.status;
      this._erroService.erro.mensagem = erro.error.Mensagem;
      this.goToPage('erro');
    });
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
        this.formCadastro.controls['cepFormControl'].setErrors({invalid: true})
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
