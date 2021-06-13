import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../clases/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  obtenerUsuarios() {
    return this.http.get<Usuarios[]>('http://localhost:3000/usuarios');
  }

  // tslint:disable-next-line:typedef
  obtenerUsuario(id: number) {
    return this.http.get<Usuarios>('http://localhost:3000/usuarios/' + id);
  }

  // tslint:disable-next-line:typedef
  crearUsuario(usuario: Usuarios) {
    return this.http.post<Usuarios>('http://localhost:3000/usuarios', usuario);
  }

  // tslint:disable-next-line:typedef
  editarUsuario(usuario: Usuarios) {
    return this.http.put('http://localhost:3000/usuarios/' + usuario.id, usuario);
  }

  // tslint:disable-next-line:typedef
  eliminarUsuario(usuario: Usuarios) {
    return this.http.delete('http://localhost:3000/usuarios/' + usuario.id);
  }
// tslint:disable-next-line:typedef
  login( email: string, password: string ){
    return this.http.post<any>('http://localhost:3001/login', {email, password} );
  }



}


