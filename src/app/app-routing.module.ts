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
import { ListarAvesComponent } from './paginas/listar-aves/listar-aves.component';
import { CadastrarAveComponent } from './paginas/cadastrar-ave/cadastrar-ave.component';
import { ComprovanteCadastroAveComponent } from './paginas/comprovante-cadastro-ave/comprovante-cadastro-ave.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'criador/cadastrar', component: CadastrarCriadorComponent },
  { path: 'criador/comprovante-cadastro', component: ComprovanteCadastroCriadorComponent },
  { path: 'associacao/cadastrar', component: CadastrarAssociacaoComponent },
  { path: 'associacao/comprovante-cadastro', component: ComprovanteCadastroAssociacaoComponent },
  { path: 'associacao/listar', component: ListarAssociacaoComponent },
  { path: 'especie/cadastrar', component: CadastrarEspecieComponent },
  { path: 'especie/listar', component: ListarEspeciesComponent },
  { path: 'especie/comprovante-cadastro', component: ComprovanteCadastroEspecieComponent },
  { path: 'ave/listar', component: ListarAvesComponent },
  { path: 'ave/cadastrar', component: CadastrarAveComponent },
  { path: 'ave/comprovante-cadastro', component: ComprovanteCadastroAveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
