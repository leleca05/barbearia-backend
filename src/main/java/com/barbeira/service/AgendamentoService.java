package com.barbeira.service;

import com.barbeira.model.Agendamento;
import com.barbeira.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendamentoService {

	@Autowired
	private AgendamentoRepository agendamentoRepository;

	public Agendamento agendar(Agendamento agendamento) {
		return agendamentoRepository.save(agendamento);
	}

	public List<Agendamento> listarAgendamentos() {
		return agendamentoRepository.findAll();
	}
}
