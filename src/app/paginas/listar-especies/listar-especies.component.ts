import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { Especie } from 'src/app/_models/especie';
import { EspecieService } from '../../_services/especie.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listar-especies',
  templateUrl: './listar-especies.component.html',
  styleUrls: ['./listar-especies.component.scss']
})
export class ListarEspeciesComponent implements OnInit {

  especie: Especie = new Especie();
  listaEspecie: Array<Especie> = [];
  displayedColumns: string[] = ['codigo', 'nome', 'nomeCientifico', 'acoes'];
  dataSource: MatTableDataSource<Especie>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private especieService: EspecieService) {
    this.loadData();
  }

  private loadData(): void {
    this.especieService.listarEspecies().subscribe((res) => {
      this.listaEspecie = res;
      this.dataSource = new MatTableDataSource(this.listaEspecie);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit(): void {
    this.especieService.zerarEspecie();
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

  editarEspecie(especie: Especie) {
    this.especieService.especie = especie;
    this.goToPage('especie/cadastrar');
  }
}
