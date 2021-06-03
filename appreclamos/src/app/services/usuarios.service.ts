import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../clases/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient)
  {
    this.cargarDatosUsuarios(1);
  }

cargarDatosUsuarios = (id: number): any =>
{
  return this.http.get<Usuarios>('http://localhost:3000/usuario' + id);
}
}


