import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AssociacaoService } from '../../_services/associacao.service';
import { Associacao } from '../../_models/associacao';



@Component({
  selector: 'app-cadastrar-associacao',
  templateUrl: './cadastrar-associacao.component.html',
  styleUrls: ['./cadastrar-associacao.component.scss']
})
export class CadastrarAssociacaoComponent implements OnInit {



  constructor(private router: Router, private associacaoService: AssociacaoService, private _snackBar: MatSnackBar,) { }

  associacao: Associacao = new Associacao();
  consultaCnpj: string = '';

  identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const cnpj = control.get('cnpjFormControl');

    if (cnpj.value) {
      cnpj.setErrors({ identityRevealed: true });
      return { identityRevealed: true };
    }
    cnpj.setErrors(null);
    return null;
  };

  forbiddenNameValidator(nameRe: Associacao): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe;
      return forbidden.cnpj === control.value ? { forbiddenName: { value: control.value } } : null;
    };
  }

  formCadastro = new FormGroup({
    cnpjFormControl: new FormControl(this.associacaoService.associacao.cnpj ? this.associacaoService.associacao.cnpj : ''),
    siglaFormControl: new FormControl(this.associacaoService.associacao.sigla ? this.associacaoService.associacao.sigla : ''),
    nomeFormControl: new FormControl(this.associacaoService.associacao.nome ? this.associacaoService.associacao.nome : ''),
    cidadeFormControl: new FormControl(this.associacaoService.associacao.cidade ? this.associacaoService.associacao.cidade : ''),
    ufFormControl: new FormControl(this.associacaoService.associacao.uf ? this.associacaoService.associacao.uf : ''),
    idFormControl: new FormControl(this.associacaoService.associacao.id ? this.associacaoService.associacao.id : '')
  });

  ngOnInit(): void {
    
  }

  onSubmit() {
    const {
      cnpjFormControl,
      nomeFormControl,
      siglaFormControl,
      cidadeFormControl,
      ufFormControl,
      idFormControl
    } = this.formCadastro.controls

    this.associacao.cnpj = cnpjFormControl.value;
    this.associacao.nome = nomeFormControl.value;
    this.associacao.sigla = siglaFormControl.value;
    this.associacao.cidade = cidadeFormControl.value;
    this.associacao.uf = ufFormControl.value;
    this.associacao.id = idFormControl.value;

    if (this.consultaCnpj === this.associacao.cnpj) {
      this.openSnackBar('Este CNPJ já está sendo usando', 'OK');
    } else {
      this.associacaoService.postAssociacao(this.associacao).subscribe((res) => {
        this.associacaoService.associacao = res;
        this.goToPage('associacao/comprovante-cadastro');
      })
    }
  }

  consultarCnpj(cnpj: string) {
    this.associacaoService.getAssociacaoPorCnpj(cnpj).subscribe(
      (res) => {
        if(res.cnpj === cnpj){
          this.consultaCnpj = res.cnpj;
          this.openSnackBar('Este CNPJ já está sendo usando', 'OK');
        }
      })
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 8000,
    });
  }

}
