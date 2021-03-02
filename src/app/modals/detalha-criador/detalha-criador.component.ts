import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Criador } from '../../_models/criador';

@Component({
  selector: 'app-detalha-criador',
  templateUrl: './detalha-criador.component.html',
  styleUrls: ['./detalha-criador.component.scss']
})
export class DetalhaCriadorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalhaCriadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Criador
  ) { }

  ngOnInit(): void {
  }

}
