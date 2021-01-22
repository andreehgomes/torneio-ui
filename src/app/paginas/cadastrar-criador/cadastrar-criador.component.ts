import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Associacao } from './../../_models/associacao';
import { Criador } from './../../_models/criador';
import { Endereco } from './../../_models/endereco';
import { AssociacaoService } from './../../_services/associacao.service';
import { CriadorService } from './../../_services/criador.service';
import { EnderecoService } from './../../_services/endereco.service';


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
    private _snackBar: MatSnackBar) {
  }

  formCadastro = new FormGroup({
    nomeFormControl: new FormControl('André'),
    sobrenomeFormControl: new FormControl('Felipe'),
    celularFormControl: new FormControl('43999899918'),
    emailFormControl: new FormControl('andre@gmail.com', [Validators.email]),
    cpfFormControl: new FormControl('07013395943'),
    rgFormControl: new FormControl('103341752'),
    ctfFormControl: new FormControl('1234567890'),
    ufClubeFormControl: new FormControl('RJ'),
    clubeFormControl: new FormControl(''),
    ruaFormControl: new FormControl('Rua'),
    numeroFormControl: new FormControl('99'),
    bairroFormControl: new FormControl('Bairro'),
    cepFormControl: new FormControl('86455000'),
    cidadeFormControl: new FormControl('Joaquim Távora'),
    ufEnderecoFormControl: new FormControl('PR'),
    senhaFormControl: new FormControl('admin'),
    confirmarSenhaFormControl: new FormControl('admin'),
    aceiteTermosFormControl: new FormControl(true)
  });

  ngOnInit(): void {
  }

  buscaAssociacaoPorUf(event: any) {
    this.associacaoService.getAssociacaoPorUf(event.value).subscribe((res) => {
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
      senhaFormControl,
      confirmarSenhaFormControl,
      aceiteTermosFormControl,

    } = this.formCadastro.controls

    this.endereco.bairro = bairroFormControl.value;
    this.endereco.cep = cepFormControl.value;
    this.endereco.cidade = cidadeFormControl.value;
    this.endereco.logradouro = ruaFormControl.value;
    this.endereco.numero = numeroFormControl.value;
    this.endereco.uf = ufEnderecoFormControl.value;
    
    this.criador.nome = nomeFormControl.value;
    this.criador.sobrenome = sobrenomeFormControl.value;
    this.criador.senha = senhaFormControl.value;
    this.criador.ibama = ctfFormControl.value;
    this.criador.rg = rgFormControl.value;
    this.criador.telefone = celularFormControl.value;
    this.criador.cpf = cpfFormControl.value;
    this.criador.email = emailFormControl.value;

    this.enderecoService.postEndereco(this.endereco).subscribe((res) => {
      console.log('End')
      console.log(res.id);
      // this.enderecoService.endereco = res;
      this.criador.endereco = new Endereco();
      this.criador.endereco.id = res.id;

      this.criadorService.postCriador(this.criador).subscribe((res) => {
        console.log('Criador');
        console.log(res.nome);
        this.criadorService.criador = res;
        this.goToPage('criador/comprovante-cadastro');
      });

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

  isValid() {
    return this.formCadastro.invalid || this.formCadastro.controls.senhaFormControl.value !== this.formCadastro.controls.confirmarSenhaFormControl.value
  }
}
