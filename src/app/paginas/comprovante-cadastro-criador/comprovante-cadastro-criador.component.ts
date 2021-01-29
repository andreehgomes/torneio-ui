import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criador } from 'src/app/_models/criador';
import { CriadorService } from 'src/app/_services/criador.service';

@Component({
  selector: 'app-comprovante-cadastro-criador',
  templateUrl: './comprovante-cadastro-criador.component.html',
  styleUrls: ['./comprovante-cadastro-criador.component.scss']
})
export class ComprovanteCadastroCriadorComponent implements OnInit {

  criador: Criador = new Criador();
  
  constructor(private router: Router, private criadorService: CriadorService) { }

  ngOnInit(): void {
    this.criador = this.criadorService.criador;
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
