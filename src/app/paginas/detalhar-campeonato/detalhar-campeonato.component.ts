import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarEdicaoComponent } from 'src/app/modals/adicionar-edicao/adicionar-edicao.component';
import { ExcluirEdicaoComponent } from 'src/app/modals/excluir-edicao/excluir-edicao.component';
import { Campeonato } from 'src/app/_models/campeonato';
import { Edicao } from 'src/app/_models/edicao';
import { CampeonatoService } from 'src/app/_services/campeonato.service';
import { EdicaoService } from '../../_services/edicao.service';

@Component({
  selector: 'app-detalhar-campeonato',
  templateUrl: './detalhar-campeonato.component.html',
  styleUrls: ['./detalhar-campeonato.component.scss']
})
export class DetalharCampeonatoComponent implements OnInit {

  public campeonato: Campeonato;
  public edicoes: Array<Edicao> = []
  public isLoading: boolean = true;

  constructor(
    private _campeonatoService: CampeonatoService,
    private _edicaoService: EdicaoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.campeonato = this._campeonatoService.campeonato;
    this.buscarEdicoes();
  }

  buscarEdicoes(){
    this.isLoading = true;
    this._edicaoService.getListEdicao(this.campeonato).subscribe((getListEdicao)=>{
      this.edicoes = getListEdicao;
      this._edicaoService.edicaoList = this.edicoes;
      this.isLoading = false;
    }, (error) => {
      if(error.status == 404){
        this.isLoading = false;
      }
      console.log('error: ', error);
    })
  }

  openDialogAdicionarEdicao(campeonato: Campeonato) {
      const dialogRef =  this.dialog.open(AdicionarEdicaoComponent, {
        width: '500px',
        height: '300',
        data: campeonato,
      });

      dialogRef.afterClosed().subscribe(result => {
        this.buscarEdicoes();
        console.log('Close modal adicionar Edição: ', result);
      });
    }

    openDialogExcluirEdicao(){
      const dialogRef =  this.dialog.open(ExcluirEdicaoComponent, {
        width: '500px',
        height: '300',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.buscarEdicoes();
        console.log('Close modal adicionar Edição: ', result);
      });
    }

}
