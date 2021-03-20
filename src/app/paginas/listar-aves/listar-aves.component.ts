import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Criador } from 'src/app/_models/criador';
import { Ave } from '../../_models/ave';
import { Especie } from '../../_models/especie';
import { AveService } from '../../_services/ave.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ErroService } from '../../_services/erro.service';

@Component({
  selector: 'app-listar-aves',
  templateUrl: './listar-aves.component.html',
  styleUrls: ['./listar-aves.component.scss']
})
export class ListarAvesComponent implements OnInit {
  especie: Especie = new Especie();
  ave: Ave = new Ave();
  criador: Criador = new Criador();
  statusFormControl = new FormControl();

  formListaAves = new FormGroup({
    statusFormControl: new FormControl(this.ave.ativo)
  })

  displayedColumns: string[] = [
    'nome',
    'especie',
    'anilha',
    'medida',
    'ativo',
    'editar',
    'transferir'
  ];
  dataSource: MatTableDataSource<Ave>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private aveService: AveService, private erroService: ErroService) {
    this.loadData();
  }

  loadData(): void {
    this.criador = JSON.parse(window.sessionStorage.getItem('criador'));
    this.aveService.getAvePorCriador(this.criador).subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    }, (erro) => {
      console.log(erro)
      this.erroService.erro.erro = true;
      this.erroService.erro.codigo = erro.error.status;
      this.erroService.erro.mensagem = erro.message;
      this.goToPage('erro');
    });
  }

  ngOnInit(): void {
    this.aveService.zerarAve();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  editarAve(ave: Ave) {
    this.aveService.ave = ave;
    this.goToPage('ave/cadastrar');
  }

  atualizarStatusAve(ave: Ave, status: MatSlideToggleChange) {
    let aveAlterada = ave;
    aveAlterada.ativo = status.checked;

    this.aveService.updateAve(aveAlterada).subscribe((ave) => {
      console.log(ave);
    });
  }

  transferirAve(ave: Ave) {
    this.aveService.ave = ave;
    this.goToPage('ave/transferir');
  }
}
