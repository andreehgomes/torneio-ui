import { Component, OnInit } from '@angular/core';
import { Associacao } from 'src/app/_models/associacao';
import { Criador } from 'src/app/_models/criador';
import { CriadorService } from 'src/app/_services/criador.service';
import { environment } from 'src/environments/environment';
import { AssociacaoService } from '../../_services/associacao.service';

@Component({
  selector: 'app-listar-solicitacoes-criadores-associacao',
  templateUrl: './listar-solicitacoes-criadores-associacao.component.html',
  styleUrls: ['./listar-solicitacoes-criadores-associacao.component.scss']
})
export class ListarSolicitacoesCriadoresAssociacaoComponent implements OnInit {

  criador: Criador = new Criador();
  criadorList: Array<Criador> = []
  associacao: Associacao = new Associacao();
  flagLista: boolean = false;
  isLoading: boolean = false;

  constructor(
    private _associacaoService: AssociacaoService,
    private _criadorService: CriadorService) { 
      this.isLoading = true;
      this.loadData();
    }

    private loadData(): void {      
      this.associacao = JSON.parse(window.sessionStorage.getItem('associacao'));
      this._criadorService.getCriadorPorAssociacao(this.associacao, environment.solicitacoesCriadoresPendentes).subscribe((res) => {
        console.log('res: ', res);
        this.criadorList = res;
        this.flagLista = true;
        this.isLoading = false;
        // this.dataSource = new MatTableDataSource(res);
        // this.dataSource.paginator = this.paginator;
      });
    }

  ngOnInit(): void {
    console.log('Solicitações pendentes',this.criador);
  }

  aceitarCriador(){}

  recusarCriador(){}

}
