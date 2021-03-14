import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AveService } from '../../_services/ave.service';
import { CriadorService } from '../../_services/criador.service';
import { Ave } from '../../_models/ave';
import { Criador } from '../../_models/criador';

@Component({
  selector: 'app-comprovante-transferencia-ave',
  templateUrl: './comprovante-transferencia-ave.component.html',
  styleUrls: ['./comprovante-transferencia-ave.component.scss']
})
export class ComprovanteTransferenciaAveComponent implements OnInit {

  criador: Criador;
  ave: Ave;

  constructor(
    private _aveService: AveService,
    private _criadorService: CriadorService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.criador = this._criadorService.criador;
    this.ave = this._aveService.ave;
  }

  goToPage(pagina: String){
    this.router.navigate([`${pagina}`]);
  }
}
