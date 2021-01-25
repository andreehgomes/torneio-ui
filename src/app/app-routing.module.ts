import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { CadastrarCriadorComponent } from './paginas/cadastrar-criador/cadastrar-criador.component';
import { ComprovanteCadastroCriadorComponent } from './paginas/comprovante-cadastro-criador/comprovante-cadastro-criador.component';
import { CadastrarAssociacaoComponent } from './paginas/cadastrar-associacao/cadastrar-associacao.component';
import { ComprovanteCadastroAssociacaoComponent } from './paginas/comprovante-cadastro-associacao/comprovante-cadastro-associacao.component';
import { ListarAssociacaoComponent } from './paginas/listar-associacao/listar-associacao.component'
import { CadastrarEspecieComponent } from './paginas/cadastrar-especie/cadastrar-especie.component';
import { ListarEspeciesComponent } from './paginas/listar-especies/listar-especies.component';
import { ComprovanteCadastroEspecieComponent } from './paginas/comprovante-cadastro-especie/comprovante-cadastro-especie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'criador/cadastro', component: CadastrarCriadorComponent },
  { path: 'criador/comprovante-cadastro', component: ComprovanteCadastroCriadorComponent },
  { path: 'associacao/cadastro', component: CadastrarAssociacaoComponent },
  { path: 'associacao/comprovante-cadastro', component: ComprovanteCadastroAssociacaoComponent },
  { path: 'associacao/listar', component: ListarAssociacaoComponent },
  { path: 'especie/cadastro', component: CadastrarEspecieComponent },
  { path: 'especie/listar', component: ListarEspeciesComponent },
  { path: 'especie/comprovante-cadastro', component: ComprovanteCadastroEspecieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
