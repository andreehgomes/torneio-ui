import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Associacao } from 'src/app/_models/associacao';
import { Campeonato } from '../../_models/campeonato';
import { CampeonatoService } from '../../_services/campeonato.service';

@Component({
  selector: 'app-cadastrar-campeonato',
  templateUrl: './cadastrar-campeonato.component.html',
  styleUrls: ['./cadastrar-campeonato.component.scss']
})
export class CadastrarCampeonatoComponent implements OnInit {

  campeonato: Campeonato = new Campeonato();
  associacao: Associacao = new Associacao();

  formCadastro = new FormGroup({
    codigoFormControl: new FormControl(this._campeonatoService.campeonato.codigo ? this._campeonatoService.campeonato.codigo : null),
    nomeFormControl: new FormControl(this._campeonatoService.campeonato.nome ? this._campeonatoService.campeonato.nome : ''),
    associacaoFormControl: new FormControl(this._campeonatoService.campeonato.associacaoHttp ? this._campeonatoService.campeonato.associacaoHttp : ''),
  })


  constructor(
    private router: Router,
    private _campeonatoService: CampeonatoService
  ) { }

  ngOnInit(): void {
    this.associacao = JSON.parse(window.sessionStorage.getItem('associacao'));
  }

  onSubmit() {
    const {
      codigoFormControl,
      nomeFormControl,
    } = this.formCadastro.controls

    this.campeonato.codigo = codigoFormControl.value;
    this.campeonato.nome = nomeFormControl.value;
    this.campeonato.associacaoHttp = this.associacao;

    console.log(this.campeonato.codigo);

    if (this.campeonato.codigo !== null) {
      this._campeonatoService.putCampeonato(this.campeonato).subscribe((res) => {
        this._campeonatoService.campeonato = res;
        this.goToPage('campeonato/comprovante-cadastro');
      })
    } else {
      this._campeonatoService.postCampeonato(this.campeonato).subscribe((res) => {
        this._campeonatoService.campeonato = res;
        this.goToPage('campeonato/comprovante-cadastro');
      });
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
