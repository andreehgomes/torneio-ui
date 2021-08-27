import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campeonato } from 'src/app/_models/campeonato';
import { Edicao } from '../../_models/edicao';
import { EdicaoService } from '../../_services/edicao.service';

@Component({
  selector: 'app-adicionar-edicao',
  templateUrl: './adicionar-edicao.component.html',
  styleUrls: ['./adicionar-edicao.component.scss']
})
export class AdicionarEdicaoComponent implements OnInit {

  edicao: Edicao = new Edicao();
  isUploading: boolean = false;
  messageSuccess: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AdicionarEdicaoComponent>,
    public _edicaoService: EdicaoService,
    @Inject(MAT_DIALOG_DATA) public data: Campeonato
  ) { }

  formCadastro = new FormGroup({
    idFormControl: new FormControl(''),
    nomeFormControl: new FormControl(''),
    campeonatoFormControl: new FormControl(this.data ? this.data : null)
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.isUploading = true;
    const {
      idFormControl,
      nomeFormControl,
      campeonatoFormControl
    } = this.formCadastro.controls;
    this.edicao.nome = nomeFormControl.value;
    this.edicao.campeonatoHttp = campeonatoFormControl.value;
    this._edicaoService.IncluirEdicao(this.edicao).subscribe((IncluirEdicao) => {
      this.isUploading = false;
      this.messageSuccess = true;
      setTimeout(() => {
        this.closeModal(true);
      }, 2000);
    })
  }

  closeModal(close?: boolean) {
    if (close) {
      this.dialogRef.close(close);
      console.log('close true: ', close);
    } else {
      this.dialogRef.close(false);
      console.log('close false: ', close);
    }
  }

}
