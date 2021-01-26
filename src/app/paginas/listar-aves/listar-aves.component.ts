import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ave } from '../../_models/ave'
import { Especie } from '../../_models/especie';
import { Criador } from '../../_models/criador';
import { AveService } from '../../_services/ave.service';
import { CriadorService } from '../../_services/criador.service';
import { EspecieService } from '../../_services/especie.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listar-aves',
  templateUrl: './listar-aves.component.html',
  styleUrls: ['./listar-aves.component.scss']
})
export class ListarAvesComponent implements OnInit {

  especie: Especie = new Especie();
  ave: Ave = new Ave();

  aveDataSource = [
    { id: 7, nome: "Fileh", especie: { id: 3, nome: "Azulão", nomeCientifico: null }, medidaAnilha: "1,5", numeroAnilha: "1234", ativo: false, dataCadastro: "2021-01-21T15:04:48.687+00:00" },
    { id: 8, nome: "Castanha", especie: { id: 3, nome: "Azulão", nomeCientifico: null }, medidaAnilha: "1,5", numeroAnilha: "1234", ativo: true, dataCadastro: "2021-01-21T15:04:48.687+00:00" }
  ]

  displayedColumns: string[] = ['nome', 'especie', 'anilha', 'medida', 'ativo', 'acoes'];
  dataSource: MatTableDataSource<Ave>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private criadorService: CriadorService,
    private aveService: AveService) {
    this.loadData();
  }

  loadData(): void {
    this.dataSource = new MatTableDataSource(this.aveDataSource);
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

  editarAve(ave: Ave) {
    console.log(ave);
    this.aveService.ave = ave;
    this.goToPage('ave/cadastrar');
  }

}
