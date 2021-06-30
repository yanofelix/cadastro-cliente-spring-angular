import { Cliente } from "../clientes/cliente";

export class ServicoPrestadoBuscaDTO {
  descricao: string;
  valor: number;
  data: string;
  cliente: Cliente;
}
