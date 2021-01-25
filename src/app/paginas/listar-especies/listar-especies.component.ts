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

  especie: Especie;
  listaEspecie: Array<Especie> = [];
  especieDataSource = [
    {id: 1, nome: 'Pardal', nomecientifico: 'Pardals'},
    {id: 2,nome: 'Canário terra', nomecientifico: 'Canárius'},
    {id: 3,nome: 'Trinca Ferro', nomecientifico: 'Trinquis Ferrius'},
    {id: 4,nome: 'Azulão', nomecientifico: 'Azulãozius'},
    {id: 5,nome: 'Curió', nomecientifico: 'Curiózis'},    
  ];
  displayedColumns: string[] = ['id', 'nome', 'nomeCientifico', 'acoes'];
  dataSource: MatTableDataSource<Especie>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private especieService: EspecieService) { 
    this.loadData();
  }

  private loadData(): void {
    this.dataSource = new MatTableDataSource(this.especieDataSource);
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

  editarEspecie(especie: Especie){
    this.especieService.especie = especie;
    this.goToPage('especie/cadastro');
  }
}
