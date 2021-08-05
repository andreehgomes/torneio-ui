import { Component, OnInit, ViewChild } from '@angular/core';
import { Campeonato } from '../../_models/campeonato';
import { Associacao } from '../../_models/associacao';
import { CampeonatoService } from '../../_services/campeonato.service'
import { Router } from '@angular/router';
import { EspecieService } from '../../_services/especie.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listar-campeonatos',
  templateUrl: './listar-campeonatos.component.html',
  styleUrls: ['./listar-campeonatos.component.scss']
})
export class ListarCampeonatosComponent implements OnInit {

  associacao: Associacao = new Associacao();
  listaCampeonatos: Array<Campeonato> = [];
  displayedColumns: string[] = ['codigo', 'nome', 'acoes']
  dataSource: MatTableDataSource<Campeonato>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _campeonatoService: CampeonatoService,
    private router: Router
  ) {
    this.loadData();
   }

  private loadData(): void {
    this.associacao = JSON.parse(window.sessionStorage.getItem('associacao'));
    this._campeonatoService.getCampeaonatoPorAssociacao(this.associacao).subscribe((res) => {
      this.listaCampeonatos = res;
      this.dataSource = new MatTableDataSource(this.listaCampeonatos);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit(): void {    
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

}
