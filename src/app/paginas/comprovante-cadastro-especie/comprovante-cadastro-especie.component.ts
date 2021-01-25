import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecieService } from '../../_services/especie.service';
import { Especie } from '../../_models/especie';

@Component({
  selector: 'app-comprovante-cadastro-especie',
  templateUrl: './comprovante-cadastro-especie.component.html',
  styleUrls: ['./comprovante-cadastro-especie.component.scss']
})
export class ComprovanteCadastroEspecieComponent implements OnInit {

  especie: Especie = new Especie();

  constructor(private router: Router, private especieService: EspecieService) { }

  ngOnInit(): void {
    this.especie = this.especieService.especie;
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
