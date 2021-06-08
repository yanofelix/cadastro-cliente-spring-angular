package com.github.yanofelix.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.yanofelix.model.entitity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	

}
