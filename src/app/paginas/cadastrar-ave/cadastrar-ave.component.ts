import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { Ave } from '../../_models/ave';
import { Especie } from '../../_models/especie';
import { EspecieService } from '../../_services/especie.service'
import { AveService } from '../../_services/ave.service'

@Component({
  selector: 'app-cadastrar-ave',
  templateUrl: './cadastrar-ave.component.html',
  styleUrls: ['./cadastrar-ave.component.scss']
})
export class CadastrarAveComponent implements OnInit {

  constructor(
    private router: Router,
    private aveService: AveService,
    private especieService: EspecieService) { }

    ave: Ave = new Ave();
    especie: Especie = new Especie();

    formCadastro = new FormGroup({
      idFormControl: new FormControl(),
      nomeFormControl: new FormControl(),
      especieFormControl: new FormControl(),
      numeroAnilhaFormControl: new FormControl(),
      medidaAnilhaFormControl: new FormControl(),
      ativoFormControl: new FormControl(this.aveService.ave.ativo ? this.aveService.ave.ativo : true),
    })

  ngOnInit(): void {
  }

  onSubmit(){
    const { 
      idFormControl,
      nomeFormControl,
      especieFormControl,
      numeroAnilhaFormControl,
      medidaAnilhaFormControl,
      ativoFormControl,
     } = this.formCadastro.controls;

     this.ave.id = idFormControl.value;
     this.ave.nome = nomeFormControl.value;
     this.ave.especie = especieFormControl.value;
     this.ave.numeroAnilha = numeroAnilhaFormControl.value;
     this.ave.medidaAnilha = medidaAnilhaFormControl.value;
     this.ave.ativo = ativoFormControl.value;

     this.aveService.ave = this.ave;
     this.goToPage('ave/comprovante-cadastro');
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
