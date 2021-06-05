import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/clases/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  nombre: string = "";
  apellidos: string = "";
  rut: string = "";
  email: string = "";
  numero_telefono: number = 0;
  password: string = "";

  constructor(private servicio: UsuariosService) { }

  ngOnInit(): void {
  }

  crearUsuario() {
    let usuario: Usuarios = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      rut: this.rut,
      email: this.email,
      numero_telefono: this.numero_telefono,
      password: this.password
    }

    this.servicio.crearUsuario(usuario).subscribe(usuarioServidor => {
      alert("Usuario creado con el id " + usuarioServidor.id);
    });
  }
}
