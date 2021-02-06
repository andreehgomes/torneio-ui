import { Component, OnInit, ViewChild } from '@angular/core';
import { Criador } from '../../_models/criador';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CriadorService } from '../../_services/criador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-criador',
  templateUrl: './listar-criador.component.html',
  styleUrls: ['./listar-criador.component.scss']
})
export class ListarCriadorComponent implements OnInit {

  criador: Array<Criador> = [];
  displayedColumns: string[] = ['nome', 'telefone', 'cpf', 'rg', 'ctf', 'ativoassociacao','detalhes'];
  dataSource: MatTableDataSource<Criador[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private criadorService: CriadorService,
    private router: Router) {
    this.loadData();
   }

   private loadData(): void {
    this.criadorService.listarCriador().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.criadorService.zerarCriador();
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

  editarCriador(criador: Criador){
    this.criadorService.criador = criador;  
    this.goToPage('criador/cadastrar');
  }

}
