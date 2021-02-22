import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Ave } from 'src/app/_models/ave';
import { Criador } from 'src/app/_models/criador';
import { AveService } from 'src/app/_services/ave.service';
import { CriadorService } from 'src/app/_services/criador.service';

@Component({
  selector: 'app-transferir-ave',
  templateUrl: './transferir-ave.component.html',
  styleUrls: ['./transferir-ave.component.scss']
})
export class TransferirAveComponent implements OnInit {
  public ave: Ave;
  public criador: Criador = null;
  public idCriadorFormControl = new FormControl('', [Validators.min(1)]);

  public httpError: HttpErrorResponse = null;

  public constructor(
    private _router: Router,
    private _service: AveService,
    private _criadorService: CriadorService
  ) {}

  public ngOnInit(): void {
    this.ave = this._service.ave;
  }

  public onSubmit(): void {
    this._criadorService
      .getCriadorPorId(this.idCriadorFormControl.value)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)))
      .subscribe(
        response => {
          this.httpError = null;
          this.criador = response;
        },
        (error: HttpErrorResponse) => {
          this.httpError = error;
          this.criador = null;
        }
      );
  }

  public goToPage(pageName: string): void {
    this._router.navigate([`${pageName}`]);
  }
}
