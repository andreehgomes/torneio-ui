import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Criador } from '../../_models/criador';
import { Router } from '@angular/router';
import { CriadorService } from '../../_services/criador.service';


@Component({
  selector: 'app-detalha-criador-logado',
  templateUrl: './detalha-criador-logado.component.html',
  styleUrls: ['./detalha-criador-logado.component.scss']
})
export class DetalhaCriadorLogadoComponent implements OnInit {

  constructor(
    private router: Router,
    private _criadorService: CriadorService,
    public dialogRef: MatDialogRef<DetalhaCriadorLogadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Criador
  ) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string) {
    this._criadorService.criador = this.data;
    this.router.navigate([`${pageName}`]);
    this.dialogRef.close();
  }

}
