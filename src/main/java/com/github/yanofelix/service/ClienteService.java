package com.github.yanofelix.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.yanofelix.model.Cliente;
import com.github.yanofelix.repository.ClienteRepository;

@Service
public class ClienteService {
	
	private ClienteRepository repository;
	
	@Autowired
	public ClienteService ( ClienteRepository repository ) {
		this.repository = repository;
	}
	
	
	public void salvarCliente(Cliente cliente) {
		validarCliente(cliente);
		repository.persistir(cliente);
	}
	
	public void validarCliente(Cliente cliente) {
		//aplica validações
	}
	
}
