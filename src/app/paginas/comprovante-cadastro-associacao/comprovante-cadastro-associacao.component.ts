import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociacaoService } from '../../_services/associacao.service';
import { Associacao } from '../../_models/associacao';

@Component({
  selector: 'app-comprovante-cadastro-associacao',
  templateUrl: './comprovante-cadastro-associacao.component.html',
  styleUrls: ['./comprovante-cadastro-associacao.component.scss']
})
export class ComprovanteCadastroAssociacaoComponent implements OnInit {

  associacao: Associacao = new Associacao();

  constructor(private router: Router, private associacaoService: AssociacaoService) { }

  ngOnInit(): void {

    this.associacao = this.associacaoService.associacao;

  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }


}
