package com.github.yanofelix.rest;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import com.github.yanofelix.rest.exception.ApiErrors;

@RestControllerAdvice

public class ApplicationControllerAdvice {
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ApiErrors handleValidationErros(MethodArgumentNotValidException e){
		BindingResult br = e.getBindingResult();
		List<String> messages = br.getAllErrors()
		.stream()
		.map(objectError -> objectError.getDefaultMessage())
		.collect(Collectors.toList());
		
		return new ApiErrors(messages);
	}
	
	@ExceptionHandler(ResponseStatusException.class)
	public ResponseEntity handleResponseStatusException(ResponseStatusException e) {
		String messageError = e.getMessage();
		HttpStatus codigoStatus = e.getStatus();
		ApiErrors apiErrors = new ApiErrors(messageError);
		
		return new ResponseEntity(apiErrors, codigoStatus);
	}
	
}
