import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { empty } from 'rxjs';
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
    codigoFormControl: new FormControl(this.especieService.especie.codigo ? this.especieService.especie.codigo : null),
    nomeFormControl: new FormControl(this.especieService.especie.nome ? this.especieService.especie.nome : ''),
    nomeCientificoFormControl: new FormControl(this.especieService.especie.nomeCientifico ? this.especieService.especie.nomeCientifico : '')
  })

  constructor(private router: Router, private especieService: EspecieService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const {
      codigoFormControl,
      nomeFormControl,
      nomeCientificoFormControl
    } = this.formCadastro.controls

    this.especie.codigo = codigoFormControl.value;
    this.especie.nome = nomeFormControl.value;
    this.especie.nomeCientifico = nomeCientificoFormControl.value;

    console.log(this.especie.codigo);

    if (this.especie.codigo !== null) {
      this.especieService.atualizarEspecie(this.especie).subscribe((res) => {
        this.especieService.especie = res;
        this.goToPage('especie/comprovante-cadastro');
      })
    } else {
      this.especieService.incluirEspecie(this.especie).subscribe((res) => {
        this.especieService.especie = res;
        this.goToPage('especie/comprovante-cadastro');
      });
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
