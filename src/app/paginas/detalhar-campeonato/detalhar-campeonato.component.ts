import { Component, OnInit } from '@angular/core';
import { Campeonato } from 'src/app/_models/campeonato';
import { CampeonatoService } from 'src/app/_services/campeonato.service';

@Component({
  selector: 'app-detalhar-campeonato',
  templateUrl: './detalhar-campeonato.component.html',
  styleUrls: ['./detalhar-campeonato.component.scss']
})
export class DetalharCampeonatoComponent implements OnInit {

  public campeonato: Campeonato;
  public edicoes: Array<any> = [
    {edicao: '2016'},
    {edicao: '2017'},
    {edicao: '2018'},
    {edicao: '2019'},
    {edicao: '2020'},
    {edicao: '2021'},
  ]

  constructor(
    private _campeonatoService: CampeonatoService
  ) { }

  ngOnInit(): void {
    this.campeonato = this._campeonatoService.campeonato;
  }

}
