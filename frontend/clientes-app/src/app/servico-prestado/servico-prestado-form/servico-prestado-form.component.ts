import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestadoDTO } from 'src/app/dtos/servicoPrestadoDTO';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servicoDTO: ServicoPrestadoDTO;
  success: boolean = false;
  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.servicoDTO = new ServicoPrestadoDTO();
   }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => this.clientes = response)
  }

  onSubmit(){
    this.servicoPrestadoService
    .salvar(this.servicoDTO)
    .subscribe( response => {
      this.success = true;
      this.errors = [];
      this.servicoDTO = new ServicoPrestadoDTO
    }, errorResponse =>{
      this.success = false;
      this.errors = errorResponse.error.errors;
    })
  }


}
