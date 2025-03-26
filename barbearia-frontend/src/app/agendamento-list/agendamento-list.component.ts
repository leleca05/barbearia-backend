import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../services/agendamento.service';  // Importando o serviço
import { Agendamento } from '../models/agendamento.model';  // Modelo do agendamento

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.css']
})
export class AgendamentoListComponent implements OnInit {
  agendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.agendamentoService.listarAgendamentos().subscribe(
      (data) => {
        this.agendamentos = data;
      },
      (error) => {
        console.error('Erro ao carregar os agendamentos:', error);
      }
    );
  }
}
