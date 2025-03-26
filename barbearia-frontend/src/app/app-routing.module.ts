import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';

const routes: Routes = [
  { path: 'agendamentos', component: AgendamentoListComponent },
  { path: 'agendar', component: AgendamentoFormComponent },
  { path: '', redirectTo: '/agendamentos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
