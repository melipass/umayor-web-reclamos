import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reclamos } from 'src/app/clases/reclamos';
import { Usuarios } from 'src/app/clases/usuarios';
import { ReclamosService } from 'src/app/services/reclamos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  isReadOnly = true;

  usuarios: Usuarios[] = [];
  reclamos: Reclamos[] = [];
  usuario: Usuarios = {
    id: 1,
    nombre: '',
    apellidos: '',
    rut: '',
    email: '',
    numero_telefono: 123134214,
    password: ''
  };
  constructor(
    private servicio: UsuariosService,
    private servicio2: ReclamosService,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
        let id;
        id = params.id;
        this.cargarUsuario(id);
    });

    this.cargarReclamos('19581239');
  }

  // tslint:disable-next-line:typedef
  cargarUsuarios() {
    this.servicio.obtenerUsuarios().subscribe(UsuariosServidor => {
      this.usuarios = UsuariosServidor;
    });
  }

  // tslint:disable-next-line:typedef
  cargarUsuario(id: number) {
    this.servicio.obtenerUsuario(id).subscribe(UsuariosServidor => {
      this.usuario = UsuariosServidor;
    });
  }

  // tslint:disable-next-line:typedef
  cargarReclamos(rut: string){
    this.servicio2.cargarReclamosDeUnUsuario(rut).subscribe(ReclamosServidor => {
      this.reclamos = ReclamosServidor;
      console.log(ReclamosServidor);
    });

  }

  editarDatos() {
    var nombres = document.getElementById('input-nombres') as HTMLInputElement;
    var apellidos = document.getElementById('input-apellidos') as HTMLInputElement;
    var rut = document.getElementById('input-rut') as HTMLInputElement;
    var telefono = document.getElementById('input-telefono') as HTMLInputElement;
    var email = document.getElementById('input-email') as HTMLInputElement;
    nombres.disabled = false;
    apellidos.disabled = false;
    rut.disabled = false;
    telefono.disabled = false;
    email.disabled = false;
    var botonEnviar = document.getElementById('enviar') as HTMLButtonElement;
    botonEnviar.style.display = "inline";
    var botonEditar = document.getElementById('editar') as HTMLButtonElement;
    botonEditar.style.display = "none";
  }

  enviarDatos() {

  }


}
