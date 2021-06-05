import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../clases/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  obtenerUsuarios() {
    return this.http.get<Usuarios[]>("http://localhost:3000/usuarios");
  }

  obtenerUsuario(id: number) {
    return this.http.get<Usuarios>("http://localhost:3000/usuarios/" + id);
  }

  crearUsuario(usuario: Usuarios) {
    return this.http.post<Usuarios>("http://localhost:3000/usuarios", usuario);
  }

  editarUsuario(usuario: Usuarios) {
    return this.http.put("http://localhost:3000/usuarios/" + usuario.id, usuario);
  }

  eliminarUsuario(usuario: Usuarios) {
    return this.http.delete("http://localhost:3000/usuarios/" + usuario.id);
  }

}


