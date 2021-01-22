import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { CadastrarCriadorComponent } from './paginas/cadastrar-criador/cadastrar-criador.component';
import { ComprovanteCadastroCriadorComponent } from './paginas/comprovante-cadastro-criador/comprovante-cadastro-criador.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'criador/cadastro', component: CadastrarCriadorComponent },
  { path: 'criador/comprovante-cadastro', component: ComprovanteCadastroCriadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
