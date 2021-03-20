import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Criador } from '../../_models/criador';
import { Router } from '@angular/router';
import { Associacao } from 'src/app/_models/associacao';
import { AssociacaoService } from '../../_services/associacao.service'


@Component({
  selector: 'app-detalha-associacao-logada',
  templateUrl: './detalha-associacao-logada.component.html',
  styleUrls: ['./detalha-associacao-logada.component.scss']
})
export class DetalhaAssociacaoLogadaComponent implements OnInit {

  constructor(
    private router: Router,
    private _associacaoService: AssociacaoService,
    public dialogRef: MatDialogRef<DetalhaAssociacaoLogadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Associacao
  ) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string) {
    this._associacaoService.associacao = this.data;
    this.router.navigate([`${pageName}`]);
    this.dialogRef.close();
  }

}
