import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  nombre: string = '';
  // tslint:disable-next-line:no-inferrable-types
  apellidos: string = '';
  // tslint:disable-next-line:no-inferrable-types
  rut: string = '';
  // tslint:disable-next-line:no-inferrable-types
  email: string = '';
  // tslint:disable-next-line:no-inferrable-types
  numero_telefono: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  password: string = '';

  constructor(private servicio: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  crearUsuario() {
    const usuario: Usuarios = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      rut: this.rut,
      email: this.email,
      numero_telefono: this.numero_telefono,
      password: this.password
    };

    this.servicio.crearUsuario(usuario).subscribe(usuarioServidor => {
      alert('Usuario creado con el id' + usuarioServidor.id);
    });
    this.router.navigateByUrl("/user-login");
  }

  validarCampos() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required")) {
        if (inputs[i].value == "") {
          alert("Llene todos los campos");
          return false;
        }
      }
    }
    this.crearUsuario();
    return true;
  }
}