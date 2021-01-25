import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { Especie } from '../../_models/especie';
import { EspecieService } from '../../_services/especie.service'

@Component({
  selector: 'app-cadastrar-especie',
  templateUrl: './cadastrar-especie.component.html',
  styleUrls: ['./cadastrar-especie.component.scss']
})
export class CadastrarEspecieComponent implements OnInit {

  especie: Especie = new Especie();

  formCadastro = new FormGroup({
    idFormControl: new FormControl(this.especieService.especie.id ? this.especieService.especie.id : ''),
    nomeFormControl: new FormControl(this.especieService.especie.nome ? this.especieService.especie.nome : ''),
    nomeCientificoFormControl: new FormControl(this.especieService.especie.nomecientifico ? this.especieService.especie.nomecientifico : '')
  })

  constructor(private router: Router, private especieService: EspecieService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const {
      idFormControl,
      nomeFormControl,
      nomeCientificoFormControl
    } = this.formCadastro.controls

    this.especie.id = idFormControl.value;
    this.especie.nome = nomeFormControl.value;
    this.especie.nomecientifico = nomeCientificoFormControl.value;
    this.especieService.especie = this.especie;
    this.goToPage('especie/comprovante-cadastro');
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
