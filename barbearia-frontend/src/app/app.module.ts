import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Necessário para utilizar ngModel
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoListComponent,
    AgendamentoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  // Importando FormsModule para usar ngModel
    AppRoutingModule  // Importando o AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
