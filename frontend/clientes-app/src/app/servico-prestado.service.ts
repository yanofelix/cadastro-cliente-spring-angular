import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
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
}
