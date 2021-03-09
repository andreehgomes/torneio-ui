import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Criador } from '../../_models/criador';


@Component({
  selector: 'app-detalha-criador-logado',
  templateUrl: './detalha-criador-logado.component.html',
  styleUrls: ['./detalha-criador-logado.component.scss']
})
export class DetalhaCriadorLogadoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalhaCriadorLogadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Criador
  ) { }

  ngOnInit(): void {
  }

}
