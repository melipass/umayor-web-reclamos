import { Component, Input, OnInit } from '@angular/core';
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

    myDate = new Date().getTime;

  constructor(
    private servicio: UsuariosService,
    private servicio2: ReclamosService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      // this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
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

    // const nombreTest  = document.getElementById('inputNombre');
    console.log('testing');
    const newReclamo: Reclamos = {
      rut: this.rutUsuarioReclamo,
      nombre: this.nombreUsuarioReclamo,
      apellido: this.apellidoUsuarioReclamo,
      asunto: this.asuntoReclamo,
      textoReclamo: this.textoReclamo,
      fecha: '02/10/21',
      estado: 'Enviado'

    };
    console.log(newReclamo);

    this.servicio2.agregarReclamoDeUsuario(newReclamo).subscribe(
      reclamoService => {
        alert('Reclamo se envio' + reclamoService);
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
    nombres.value="";
    apellidos.value="";
    rut.value="";
    telefono.value="";
    email.value="";
    var botonEnviar = document.getElementById('enviar') as HTMLButtonElement;
    botonEnviar.style.display = "inline";
    var contraseñat = document.getElementById('input-passwordt') as HTMLInputElement;
    contraseñat.style.display="inline";
    var contraseña = document.getElementById('input-password') as HTMLInputElement;
    contraseña.style.display="inline";
    contraseña.value="";
    var botonEditar = document.getElementById('editar') as HTMLButtonElement;
    botonEditar.style.display = "none";
  }

  enviarDatos() {
    const usuario: Usuarios = {
      id: this.usuario.id,
      nombre: this.nombre,
      apellidos: this.apellidos,
      rut: this.rut,
      email: this.email,
      numero_telefono: this.numero_telefono,
      password: this.password
    };

    this.servicio.editarUsuario(usuario).subscribe(usuarioServidor => {
      alert("Usuario Editado");
      document.defaultView.location.reload();
    });
  }

  validarCampos() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required")) {
        if (inputs[i].value=="") {
          alert("Llene todos los campos");
          return false;
        }
      }
    }
    this.enviarDatos();
    return true;
  }
}
