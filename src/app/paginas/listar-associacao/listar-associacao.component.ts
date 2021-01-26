import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AssociacaoService } from '../../_services/associacao.service';
import { Associacao } from '../../_models/associacao';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-associacao',
  templateUrl: './listar-associacao.component.html',
  styleUrls: ['./listar-associacao.component.scss']
})
export class ListarAssociacaoComponent implements OnInit {

  associacao: Array<Associacao> = [];
  displayedColumns: string[] = ['sigla', 'nome', 'cnpj', 'cidade', 'uf', 'acoes'];
  dataSource: MatTableDataSource<Associacao[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private associacaoService: AssociacaoService,
    private router: Router) {
    this.loadData();
  }
  private loadData(): void {
    this.associacaoService.listarAssociacao().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngOnInit(): void {
    this.associacaoService.zerarAssociacao();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  editarAssociacao(associacao: Associacao){
    this.associacaoService.associacao = associacao;  
    this.goToPage('associacao/cadastrar');
  }
}
