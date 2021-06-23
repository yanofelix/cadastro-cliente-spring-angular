import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  constructor(
    private service: ClientesService,
    private router:Router) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
    .salvar(this.cliente)
    .subscribe( response => {
      this.success = true;
      this.errors = [];
      this.cliente = response;
    }, errorResponse =>{
      this.errors = errorResponse.error.errors;
      //console.log(errorResponse.error.errors )
    }
    )
  }
  voltarParaListar(){
    this.router.navigate(['/clientes-lista'])
  }

}
