import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  usuarios: Usuarios[] = [];
  usuario: Usuarios = {
    "id": 1,
    "nombre": "",
    "apellidos": "",
    "rut": "",
    "email": "",
    "numero_telefono": 123134214,
    "password": ""
  };
  constructor(
    private servicio: UsuariosService,
    private activatedRoute:ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params=>{
      let id = params["id"];
      this.cargarUsuario(id);
    });
  }

  cargarUsuarios() {
    this.servicio.obtenerUsuarios().subscribe(UsuariosServidor => {
      this.usuarios = UsuariosServidor;
    });
  }

  cargarUsuario(id:number) {
    this.servicio.obtenerUsuario(id).subscribe(UsuariosServidor => {
      this.usuario = UsuariosServidor;
    })
  }

}
