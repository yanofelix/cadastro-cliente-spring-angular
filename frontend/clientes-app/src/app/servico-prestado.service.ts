import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ServicoPrestadoBuscaDTO } from './dtos/servicoPrestadoBuscaDTO';
import { ServicoPrestadoDTO } from './dtos/servicoPrestadoDTO';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiUrl: string = environment.apiUrlBase + "/api/servicos-prestados";

  constructor( private http: HttpClient ) {

   }

   salvar(servicoPrestado: ServicoPrestadoDTO): Observable<ServicoPrestadoDTO> {
    return this.http.post<ServicoPrestadoDTO>(`${this.apiUrl}`, servicoPrestado);
   }

   buscar(nome:string, mes:number): Observable<ServicoPrestadoBuscaDTO[]> {
     const httpParams = new HttpParams().set("nome", nome).set("mes", mes ? mes.toString() : '');

     const url = this.apiUrl + "?" + httpParams.toString();
     return this.http.get<any>(url);
   }

}
