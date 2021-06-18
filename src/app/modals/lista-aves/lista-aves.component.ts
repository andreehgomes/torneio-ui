import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Criador } from 'src/app/_models/criador';
import { Ave } from '../../_models/ave';
import { Especie } from '../../_models/especie';
import { AveService } from '../../_services/ave.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-lista-aves',
  templateUrl: './lista-aves.component.html',
  styleUrls: ['./lista-aves.component.scss']
})
export class ListaAvesComponent implements OnInit {

  especie: Especie = new Especie();
  ave: Ave = new Ave();
  criador: Criador = new Criador();
  statusFormControl = new FormControl();

  formListaAves = new FormGroup({
    statusFormControl: new FormControl(this.ave.ativo)
  })

  displayedColumns: string[] = [
    'nome',
    'especie',
    'anilha',
    'sexo',
    'ativo'
  ];
  dataSource: MatTableDataSource<Ave>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private aveService: AveService,
    public dialogRef: MatDialogRef<ListaAvesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Criador) {
    this.loadData();
  }

  loadData(): void {
    this.aveService.getAvePorCriador(this.data).subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.aveService.zerarAve();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  atualizarStatusAve(ave: Ave, status: MatSlideToggleChange) {
    let aveAlterada = ave;
    aveAlterada.ativo = status.checked;

    this.aveService.updateAve(aveAlterada).subscribe((ave) => {
      console.log(ave);
    });
  }

}
