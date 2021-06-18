import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criador } from '../../_models/criador';
import { AveService } from '../../_services/ave.service';
import { Ave } from '../../_models/ave';

@Component({
  selector: 'app-toolbar-criador',
  templateUrl: './toolbar-criador.component.html',
  styleUrls: ['./toolbar-criador.component.scss']
})
export class ToolbarCriadorComponent implements OnInit {

  statusVermelho: boolean = false;
  statusAzul: boolean = false;
  criador: Criador = new Criador();
  avesList: Array<Ave> = [];

  constructor(private router: Router, private _aveService: AveService) { }

  ngOnInit(): void {
    this.criador = JSON.parse(window.sessionStorage.getItem('criador'));
    console.log('this.criador: ', this.criador)
    this.statusVermelho = this.criador.ativo;
    this._aveService.getAveTransferencia(this.criador).subscribe((res) => {
      console.log('RES: ',res);
      this.avesList = res;
      this.statusAzul = true;
    }, (erro) => {
      console.log('ERRO: ',erro);
    });
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  close(status: string){
    if(status === 'statusVermelho'){
      this.statusVermelho = true;
    }else if (status === 'statusAzul'){
      this.statusAzul = false;
    }
  }

  abrirListadeTransferencias(){
    this.router.navigate(['ave/listar-transferencias']);
    this.close('statusAzul');
  }

}
