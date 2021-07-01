import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { ToolbarPrincipalComponent } from './componentes/toolbar-principal/toolbar-principal.component';
import { CadastrarCriadorComponent } from './paginas/cadastrar-criador/cadastrar-criador.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ComprovanteCadastroCriadorComponent } from './paginas/comprovante-cadastro-criador/comprovante-cadastro-criador.component';
import { TermoDeResponsabilidadeComponent } from './modals/termo-de-responsabilidade/termo-de-responsabilidade.component';
import { CadastrarAssociacaoComponent } from './paginas/cadastrar-associacao/cadastrar-associacao.component';
import { ComprovanteCadastroAssociacaoComponent } from './paginas/comprovante-cadastro-associacao/comprovante-cadastro-associacao.component';
import { ListarAssociacaoComponent } from './paginas/listar-associacao/listar-associacao.component';
import { CpfcnpjPipe } from './_pipes/cpfcnpj.pipe';
import { CadastrarEspecieComponent } from './paginas/cadastrar-especie/cadastrar-especie.component';
import { ListarEspeciesComponent } from './paginas/listar-especies/listar-especies.component';
import { ComprovanteCadastroEspecieComponent } from './paginas/comprovante-cadastro-especie/comprovante-cadastro-especie.component';
import { ListarAvesComponent } from './paginas/listar-aves/listar-aves.component';
import { CadastrarAveComponent } from './paginas/cadastrar-ave/cadastrar-ave.component';
import { ComprovanteCadastroAveComponent } from './paginas/comprovante-cadastro-ave/comprovante-cadastro-ave.component';
import { ListarCriadorComponent } from './paginas/listar-criador/listar-criador.component';
import { ToolbarCriadorComponent } from './componentes/toolbar-criador/toolbar-criador.component';
import { ToolbarAssociacaoComponent } from './componentes/toolbar-associacao/toolbar-associacao.component';
import { TransferirAveComponent } from './paginas/transferir-ave/transferir-ave.component';
import { DetalhaCriadorComponent } from './modals/detalha-criador/detalha-criador.component';
import { ListaAvesComponent } from './modals/lista-aves/lista-aves.component';
import { DetalhaCriadorLogadoComponent } from './modals/detalha-criador-logado/detalha-criador-logado.component';
import { ComprovanteTransferenciaAveComponent } from './paginas/comprovante-transferencia-ave/comprovante-transferencia-ave.component';
import { ErroComponent } from './paginas/erro/erro.component';
import { DetalhaAssociacaoLogadaComponent } from './modals/detalha-associacao-logada/detalha-associacao-logada.component';
import { ListarTransferenciasComponent } from './paginas/listar-transferencias/listar-transferencias.component';
import { ListarTransferenciasRealizadasComponent } from './paginas/listar-transferencias-realizadas/listar-transferencias-realizadas.component';
import { ListaAssociacaoComponent } from './modals/lista-associacao/lista-associacao.component';
import { ListarSolicitacoesCriadoresAssociacaoComponent } from './paginas/listar-solicitacoes-criadores-associacao/listar-solicitacoes-criadores-associacao.component';
import { ListarCampeonatosComponent } from './paginas/listar-campeonatos/listar-campeonatos.component';
import { CadastrarCampeonatoComponent } from './paginas/cadastrar-campeonato/cadastrar-campeonato.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToolbarPrincipalComponent,
    CadastrarCriadorComponent,
    RodapeComponent,
    ComprovanteCadastroCriadorComponent,
    TermoDeResponsabilidadeComponent,
    CadastrarAssociacaoComponent,
    ComprovanteCadastroAssociacaoComponent,
    ListarAssociacaoComponent,
    CpfcnpjPipe,
    CadastrarEspecieComponent,
    ListarEspeciesComponent,
    ComprovanteCadastroEspecieComponent,
    ListarAvesComponent,
    CadastrarAveComponent,
    ComprovanteCadastroAveComponent,
    ListarCriadorComponent,
    ToolbarCriadorComponent,
    ToolbarAssociacaoComponent,
    TransferirAveComponent,
    DetalhaCriadorComponent,
    ListaAvesComponent,
    DetalhaCriadorLogadoComponent,
    ComprovanteTransferenciaAveComponent,
    ErroComponent,
    DetalhaAssociacaoLogadaComponent,
    ListarTransferenciasComponent,
    ListarTransferenciasRealizadasComponent,
    ListaAssociacaoComponent,
    ListarSolicitacoesCriadoresAssociacaoComponent,
    ListarCampeonatosComponent,
    CadastrarCampeonatoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatMenuModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
