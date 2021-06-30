import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { CadastrarCriadorComponent } from './paginas/cadastrar-criador/cadastrar-criador.component';
import { ComprovanteCadastroCriadorComponent } from './paginas/comprovante-cadastro-criador/comprovante-cadastro-criador.component';
import { CadastrarAssociacaoComponent } from './paginas/cadastrar-associacao/cadastrar-associacao.component';
import { ComprovanteCadastroAssociacaoComponent } from './paginas/comprovante-cadastro-associacao/comprovante-cadastro-associacao.component';
import { ListarAssociacaoComponent } from './paginas/listar-associacao/listar-associacao.component';
import { CadastrarEspecieComponent } from './paginas/cadastrar-especie/cadastrar-especie.component';
import { ListarEspeciesComponent } from './paginas/listar-especies/listar-especies.component';
import { ComprovanteCadastroEspecieComponent } from './paginas/comprovante-cadastro-especie/comprovante-cadastro-especie.component';
import { ListarAvesComponent } from './paginas/listar-aves/listar-aves.component';
import { ListarCriadorComponent } from './paginas/listar-criador/listar-criador.component';
import { CadastrarAveComponent } from './paginas/cadastrar-ave/cadastrar-ave.component';
import { ComprovanteCadastroAveComponent } from './paginas/comprovante-cadastro-ave/comprovante-cadastro-ave.component';
import { TransferirAveComponent } from './paginas/transferir-ave/transferir-ave.component';
import { ComprovanteTransferenciaAveComponent } from './paginas/comprovante-transferencia-ave/comprovante-transferencia-ave.component';
import { ErroComponent } from './paginas/erro/erro.component';
import { ListarTransferenciasComponent } from './paginas/listar-transferencias/listar-transferencias.component';
import { ListarTransferenciasRealizadasComponent } from './paginas/listar-transferencias-realizadas/listar-transferencias-realizadas.component';
import { ListarSolicitacoesCriadoresAssociacaoComponent } from './paginas/listar-solicitacoes-criadores-associacao/listar-solicitacoes-criadores-associacao.component';
import { ListarCampeonatosComponent } from './paginas/listar-campeonatos/listar-campeonatos.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'erro', component: ErroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'criador/cadastrar', component: CadastrarCriadorComponent },
  { path: 'criador/listar', component: ListarCriadorComponent },
  { path: 'criador/comprovante-cadastro', component: ComprovanteCadastroCriadorComponent },
  { path: 'associacao/cadastrar', component: CadastrarAssociacaoComponent },
  { path: 'associacao/comprovante-cadastro', component: ComprovanteCadastroAssociacaoComponent },
  { path: 'associacao/listar', component: ListarAssociacaoComponent },
  { path: 'especie/cadastrar', component: CadastrarEspecieComponent },
  { path: 'especie/listar', component: ListarEspeciesComponent },
  { path: 'especie/comprovante-cadastro', component: ComprovanteCadastroEspecieComponent },
  { path: 'ave/listar', component: ListarAvesComponent },
  { path: 'ave/cadastrar', component: CadastrarAveComponent },
  { path: 'ave/transferir', component: TransferirAveComponent },
  { path: 'ave/listar-transferencias', component: ListarTransferenciasComponent },
  { path: 'ave/listar-transferencias-realizadas', component: ListarTransferenciasRealizadasComponent },
  { path: 'ave/comprovante-cadastro', component: ComprovanteCadastroAveComponent },
  { path: 'ave/comprovante-transferencia-ave', component: ComprovanteTransferenciaAveComponent },
  { path: 'ave/listar-solicitacoes-criadores', component: ListarSolicitacoesCriadoresAssociacaoComponent },
  { path: 'campeonato/listar', component: ListarCampeonatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
