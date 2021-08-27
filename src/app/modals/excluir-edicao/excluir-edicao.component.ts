import { Component, OnInit } from '@angular/core';
import { EdicaoService } from '../../_services/edicao.service';
import { Edicao } from '../../_models/edicao';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-edicao',
  templateUrl: './excluir-edicao.component.html',
  styleUrls: ['./excluir-edicao.component.scss']
})
export class ExcluirEdicaoComponent implements OnInit {

  public edicao: Edicao = new Edicao();
  public edicoes: Array<Edicao> = [];
  public isLoading: boolean = true;

  formCadastro = new FormGroup({
    edicaoForm: new FormControl(this.edicao ? this.edicao : null)
  })

  constructor(
    public dialogRef: MatDialogRef<ExcluirEdicaoComponent>,
    private _edicaoService: EdicaoService
  ) { }

  ngOnInit(): void {
    this.listarEdicoes();
  }

  onSubmit(){
    const{
      edicaoForm
    } = this.formCadastro.controls;
    this.edicao = edicaoForm.value;
    console.log('edicoes: ', this.edicao);
  }

  listarEdicoes(){
    this.edicoes = this._edicaoService.edicaoList;
    this.isLoading = false;
  }
}
