import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamos } from 'src/app/clases/reclamos';
import { Usuarios } from 'src/app/clases/usuarios';
import { ReclamosService } from 'src/app/services/reclamos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DatePipe } from '@angular/common';
// import { threadId } from 'node:worker_threads';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css'],
  providers: [DatePipe]
})
export class HomeUserComponent implements OnInit {

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

  isReadOnly = true;
  usuarios: Usuarios[] = [];
  reclamos: Reclamos[] = [];

  usuario: Usuarios = {
    id: 0,
    nombre: '',
    apellidos: '',
    rut: '',
    email: '',
    numero_telefono: 123134214,
    password: ''
  };

  // Campos para poder agregar un nuevo reclamo

    // tslint:disable-next-line:no-inferrable-types
    rutUsuarioReclamo: string;
    // tslint:disable-next-line:no-inferrable-types
    nombreUsuarioReclamo: string;
    // tslint:disable-next-line:no-inferrable-types
    apellidoUsuarioReclamo: string ;
    // tslint:disable-next-line:no-inferrable-types
    asuntoReclamo: string ;
    // tslint:disable-next-line:no-inferrable-types
    textoReclamo: string ;
    // tslint:disable-next-line:no-inferrable-types
    fechaUsuarioReclamo: string ;
    // tslint:disable-next-line:no-inferrable-types
    estadoUsuarioReclamo: string ;

    myDate: Date = new Date();
    stringDate: string;

  constructor(
    private servicio: UsuariosService,
    private servicio2: ReclamosService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      this.stringDate = this.myDate.getDay()   + '/' + (this.myDate.getMonth() + 1) + '/' + this.myDate.getFullYear();
  }

  ngOnInit(): void {
    console.log('rut de test', this.rutUsuarioReclamo);
    this.activatedRoute.params.subscribe( params => {
        let id;
        id = params.id;
        this.cargarUsuario(id);
    });

    // this.cargarReclamos('19581239');
  }

  // tslint:disable-next-line:typedef
  agregarReclamo()
  {
    const newReclamo: Reclamos = {
      rut: this.rutUsuarioReclamo,
      nombre: this.nombreUsuarioReclamo,
      apellido: this.apellidoUsuarioReclamo,
      asunto: this.asuntoReclamo,
      textoReclamo: this.textoReclamo,
      fecha: this.stringDate,
      estado: 'Enviado'

    };
    console.log(newReclamo);

    this.servicio2.agregarReclamoDeUsuario(newReclamo).subscribe(
      reclamoService => {
        alert('El reclamo ha sido enviado.');
        this.cargarReclamos(this.rutUsuarioReclamo);
      }
    );
    this.clearFields();
  }
// tslint:disable-next-line:typedef
  clearFields()
  {
    this.asuntoReclamo = '';
    this.textoReclamo = '';
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
      console.log(this.usuario.rut);
      const rutBuscado = this.usuario.rut;
      this.rutUsuarioReclamo = this.usuario.rut;
      this.nombreUsuarioReclamo = this.usuario.nombre;
      this.apellidoUsuarioReclamo = this.usuario.apellidos;
      this.cargarReclamos(rutBuscado);
      // console.log(this.cargarReclamos(rutBuscado));
    });
  }

  // tslint:disable-next-line:typedef
  cargarReclamos(rut: string){
    console.log(rut);
    this.servicio2.cargarReclamosDeUnUsuario(rut).subscribe(ReclamosServidor => {
      this.reclamos = ReclamosServidor;
      console.log(this.reclamos);
    });
  }
// tslint:disable-next-line:typedef
  editarDatos() {
    const nombres = document.getElementById('input-nombres') as HTMLInputElement;
    const apellidos = document.getElementById('input-apellidos') as HTMLInputElement;
    // const rut = document.getElementById('input-rut') as HTMLInputElement;
    const telefono = document.getElementById('input-telefono') as HTMLInputElement;
    const email = document.getElementById('input-email') as HTMLInputElement;
    nombres.disabled = false;
    apellidos.disabled = false;
    // rut.disabled = false;
    telefono.disabled = false;
    email.disabled = false;
    const botonEnviar = document.getElementById('enviar') as HTMLButtonElement;
    botonEnviar.style.display = 'inline';
    const contraseñat = document.getElementById('input-passwordt') as HTMLInputElement;
    contraseñat.style.display = 'inline';
    const contraseña = document.getElementById('input-password') as HTMLInputElement;
    contraseña.style.display = 'inline';
    const botonEditar = document.getElementById('editar') as HTMLButtonElement;
    botonEditar.style.display = 'none';
    const botonCancelar = document.getElementById('cancelar') as HTMLButtonElement;
    botonCancelar.style.display = 'inline';
  }
// tslint:disable-next-line:typedef
  enviarDatos() {
    const usuario: Usuarios = {
      id: this.usuario.id,
      nombre: this.nombre,
      apellidos: this.apellidos,
      rut: this.rutUsuarioReclamo, // this.rut,
      email: this.email,
      numero_telefono: this.numero_telefono,
      password: this.password
    };

    this.servicio.editarUsuario(usuario).subscribe(usuarioServidor => {
      alert('Usuario Editado');
      document.defaultView.location.reload();
    });
  }
// tslint:disable-next-line:typedef
  cancelarEdicion(){
    const nombres = document.getElementById('input-nombres') as HTMLInputElement;
    const apellidos = document.getElementById('input-apellidos') as HTMLInputElement;
    const telefono = document.getElementById('input-telefono') as HTMLInputElement;
    const email = document.getElementById('input-email') as HTMLInputElement;
    nombres.disabled = true;
    apellidos.disabled = true;
    telefono.disabled = true;
    email.disabled = true;
    const botonEditar = document.getElementById('editar') as HTMLButtonElement;
    botonEditar.style.display = 'inline';
    const botonEnviar = document.getElementById('enviar') as HTMLButtonElement;
    botonEnviar.style.display = 'none';
    const botonCancelar = document.getElementById('cancelar') as HTMLButtonElement;
    botonCancelar.style.display = 'none';
    const contraseñat = document.getElementById('input-passwordt') as HTMLInputElement;
    contraseñat.style.display = 'none';
    const contraseña = document.getElementById('input-password') as HTMLInputElement;
    contraseña.style.display = 'none';
  }
// tslint:disable-next-line:typedef
  validarCampos() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute('required')) {
        if (inputs[i].value == '') {
          alert('Llene todos los campos');
          return false;
        }
      }
    }
    this.enviarDatos();
    return true;
  }
}
