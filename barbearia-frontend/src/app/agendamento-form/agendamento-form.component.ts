import { Component } from '@angular/core';
import { AgendamentoService } from '../services/agendamento.service';  // Importando o serviço
import { Agendamento } from '../models/agendamento.model';  // Modelo do agendamento
import { Router } from '@angular/router';  // Importando o Router para redirecionamento

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent {
  agendamento: Agendamento = new Agendamento();

  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.agendamentoService.criarAgendamento(this.agendamento).subscribe(
      (response) => {
        console.log('Agendamento criado com sucesso!', response);
        this.router.navigate(['/agendamentos']);  // Redirecionando para a lista de agendamentos
      },
      (error) => {
        console.error('Erro ao criar agendamento:', error);
      }
    );
  }
}
