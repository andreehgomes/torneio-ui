import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campeonato } from '../../_models/campeonato';
import { CampeonatoService } from '../../_services/campeonato.service';

@Component({
  selector: 'app-comprovante-cadastro-campeonato',
  templateUrl: './comprovante-cadastro-campeonato.component.html',
  styleUrls: ['./comprovante-cadastro-campeonato.component.scss']
})
export class ComprovanteCadastroCampeonatoComponent implements OnInit {

  campeonato: Campeonato = new Campeonato();

  constructor(
    private router: Router,
    private _campeonatoService: CampeonatoService
  ) {
    this.campeonato = _campeonatoService.campeonato;
   }

  ngOnInit(): void {
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
