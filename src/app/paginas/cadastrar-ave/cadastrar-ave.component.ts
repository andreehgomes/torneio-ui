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

  especies: Array<Especie> = []

  constructor(
    private router: Router,
    private aveService: AveService,
    private especieService: EspecieService) {

    this.especieService.listarEspecies().subscribe((res) => {
      this.especie = res;
    })

  }

  ave: Ave = new Ave();
  especie: Especie = new Especie();

  formCadastro = new FormGroup({
    idFormControl: new FormControl(this.aveService.ave.codigo ? this.aveService.ave.codigo : ''),
    nomeFormControl: new FormControl(this.aveService.ave.nome ? this.aveService.ave.nome : ''),
    especieFormControl: new FormControl(this.aveService.ave.especieHttp ? this.aveService.ave.especieHttp : ''),
    numeroAnilhaFormControl: new FormControl(this.aveService.ave.numeroAnilha ? this.aveService.ave.numeroAnilha : ''),
    medidaAnilhaFormControl: new FormControl(this.aveService.ave.medidaAnilha ? this.aveService.ave.medidaAnilha : ''),
    ativoFormControl: new FormControl(this.aveService.ave.ativo ? this.aveService.ave.ativo : true),
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const {
      idFormControl,
      nomeFormControl,
      especieFormControl,
      numeroAnilhaFormControl,
      medidaAnilhaFormControl,
      ativoFormControl,
    } = this.formCadastro.controls;

    this.ave.codigo = idFormControl.value;
    this.ave.nome = nomeFormControl.value;
    this.ave.especieHttp = especieFormControl.value;
    this.ave.numeroAnilha = numeroAnilhaFormControl.value;
    this.ave.medidaAnilha = medidaAnilhaFormControl.value;
    this.ave.ativo = ativoFormControl.value;

    this.ave.criadorHttp = JSON.parse(window.sessionStorage.getItem('criador'));
    this.ave.ativo = true;

    console.log(this.ave);

    this.aveService.incluirAve(this.ave).subscribe((res) => {
      console.log('RES: ', res);
      this.aveService.ave = res;
      this.goToPage('ave/comprovante-cadastro');
    })
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
