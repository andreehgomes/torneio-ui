import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
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
  ave: Ave;
  criadorNovo: Criador = null;
  idCriadorFormControl = new FormControl('', [Validators.min(1)]);

  httpError: HttpErrorResponse = null;
  isLoading: boolean = false;

  constructor(
    private _router: Router,
    private _aveService: AveService,
    private _criadorService: CriadorService
  ) {}

  ngOnInit(): void {
    this.ave = this._aveService.ave;
  }

  onSubmit(): void {
    this.httpError = null;
    this.isLoading = true;

    this._criadorService
      .getCriadorPorId(this.idCriadorFormControl.value)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)))
      .subscribe(
        data => {
          this.criadorNovo = data;
          this._criadorService.criador = data;
          this.isLoading = false;
        },
        (error: HttpErrorResponse) => {
          this.httpError = error;

          this.criadorNovo = null;
          this._criadorService.criador = null;
          this.isLoading = false;
        }
      );
  }

  goToPage(pageName: string): void {
    this._router.navigate([`${pageName}`]);
  }

  updateCriador(): void {
    this._aveService.updateCriador(this.ave).subscribe((res) => {
      console.log(res);
      this.goToPage('ave/comprovante-transferencia-ave');
    });
  }

  transferirAve(){
    this._aveService.transferirAve(this.ave, this.criadorNovo).subscribe((res) => {
      console.log(res);
      this.goToPage('ave/comprovante-transferencia-ave');
    });
  }
}
