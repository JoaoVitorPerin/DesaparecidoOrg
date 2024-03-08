import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoPaginacaoComponent } from './shared/components/botao-paginacao/botao-paginacao.component';
import { PrincipalComponent } from './modules/principal/principal.component';
import { DetalhesComponent } from './modules/detalhes/detalhes.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BarraPesquisaComponent } from './shared/components/barra-pesquisa/barra-pesquisa.component';
import { CardComponent } from './shared/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BotaoPaginacaoComponent,
    PrincipalComponent,
    DetalhesComponent,
    HeaderComponent,
    BarraPesquisaComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
