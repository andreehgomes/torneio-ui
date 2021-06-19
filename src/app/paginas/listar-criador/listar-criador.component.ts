import { Component, OnInit, ViewChild } from '@angular/core';
import { Criador } from '../../_models/criador';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CriadorService } from '../../_services/criador.service';
import { Router } from '@angular/router';
import { Associacao } from 'src/app/_models/associacao';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalhaCriadorComponent } from '../../modals/detalha-criador/detalha-criador.component';
import { ListaAvesComponent } from '../../modals/lista-aves/lista-aves.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-listar-criador',
  templateUrl: './listar-criador.component.html',
  styleUrls: ['./listar-criador.component.scss']
})
export class ListarCriadorComponent implements OnInit {

  associacao: Associacao;
  criador: Array<Criador> = [];
  displayedColumns: string[] = ['nome', 'telefone', 'cpf', 'rg', 'ctf', 'ativoassociacao', 'detalhes', 'aves'];
  dataSource: MatTableDataSource<Criador>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private criadorService: CriadorService,
    private router: Router) {
    this.loadData();
  }

  private loadData(): void {
    this.associacao = JSON.parse(window.sessionStorage.getItem('associacao'));
    this.criadorService.getCriadorPorAssociacao(this.associacao, environment.solicitacoesCriadoresAceitas).subscribe((res) => {
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

  editarCriador(criador: Criador) {
    this.criadorService.criador = criador;
    this.goToPage('criador/cadastrar');
  }

  openDialog(criador: Criador, id: string) {
    if(id === 'detalhes'){
      const dialogRef =  this.dialog.open(DetalhaCriadorComponent, {
        width: '750px',
        data: criador
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Modal detalha criador fechada');
      });
    }

    if(id === 'aves'){
      const dialogRef =  this.dialog.open(ListaAvesComponent, {
        width: '750px',
        data: criador
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Modal lista aves fechada');
      });
    }
  }

  atualizarStatusCriador(criador: Criador, status: MatSlideToggleChange) {
    let criadorAtualizado = criador;
    criadorAtualizado.ativo = status.checked;

    console.log(criadorAtualizado);

    this.criadorService.putCriador(criadorAtualizado).subscribe((ave) => {
      console.log(ave);
    });
  }

}
