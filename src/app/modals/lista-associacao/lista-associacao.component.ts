import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AssociacaoService } from '../../_services/associacao.service';
import { Associacao } from '../../_models/associacao';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-lista-associacao',
  templateUrl: './lista-associacao.component.html',
  styleUrls: ['./lista-associacao.component.scss']
})
export class ListaAssociacaoComponent implements OnInit {

  associacao: Array<Associacao> = [];
  displayedColumns: string[] = ['sigla', 'nome', 'cnpj', 'acoes'];
  dataSource: MatTableDataSource<Associacao[]>;
  isLoading: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private associacaoService: AssociacaoService,
    public dialogRef: MatDialogRef<ListaAssociacaoComponent>,
    private router: Router) {
    this.loadData();
  }
  private loadData(): void {
    this.isLoading = true;
    this.associacaoService.listarAssociacao().subscribe((res) => {
      this.isLoading = false;
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
    // this.associacaoService.associacao = associacao;  
    this.dialogRef.close(associacao); 
  }

}
