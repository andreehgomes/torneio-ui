import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from 'src/app/_models/usuario';
import { UsuarioService } from '../../_services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {
  hide = true;
  usuario: Usuario = new Usuario();

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  formControl = new FormGroup({
    emailFormControl: new FormControl(),
    senhaFormControl: new FormControl()
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const {
      emailFormControl,
      senhaFormControl
    } = this.formControl.controls;
    this.usuario.email = emailFormControl.value;
    this.usuario.senha = senhaFormControl.value;

    this.login(this.usuario.email);
  }

  login(email: string) {
    this.usuarioService.getUsuarioPorEmail(email).subscribe((res) => {
      console.log(res);
    })
  }

}
