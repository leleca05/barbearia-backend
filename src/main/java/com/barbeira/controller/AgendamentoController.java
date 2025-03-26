package com.barbeira.controller;

import com.barbeira.model.Agendamento;
import com.barbeira.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agendamentos")
public class AgendamentoController {

	@Autowired
	private AgendamentoService agendamentoService;

	@PostMapping
	public ResponseEntity<Agendamento> agendar(@RequestBody Agendamento agendamento) {
		Agendamento novoAgendamento = agendamentoService.agendar(agendamento);
		return ResponseEntity.status(201).body(novoAgendamento);
	}

	@GetMapping
	public List<Agendamento> listarAgendamentos() {
		return agendamentoService.listarAgendamentos();
	}
}

