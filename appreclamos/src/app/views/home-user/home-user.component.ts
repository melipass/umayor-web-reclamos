import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute
    ) {
      this.stringDate = this.myDate.getFullYear() + '/' + (this.myDate.getMonth() + 1) + '/' + this.myDate.getDay();
      // this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
  }

  ngOnInit(): void {
    console.log('rut de test', this.rutUsuarioReclamo);
    this.activatedRoute.params.subscribe( params => {
        let id;
        id = params.id;
        this.cargarUsuario(1);
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
      fecha: this.stringDate,
      estado: 'Enviado'

    };
    this.servicio2.agregarReclamoDeUsuario(newReclamo).subscribe(
      reclamoService => {
        alert('Reclamo se envio');
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
    const rut = document.getElementById('input-rut') as HTMLInputElement;
    const telefono = document.getElementById('input-telefono') as HTMLInputElement;
    const email = document.getElementById('input-email') as HTMLInputElement;
    nombres.disabled = false;
    apellidos.disabled = false;
    rut.disabled = false;
    telefono.disabled = false;
    email.disabled = false;
    const botonEnviar = document.getElementById('enviar') as HTMLButtonElement;
    botonEnviar.style.display = 'inline';
    const botonEditar = document.getElementById('editar') as HTMLButtonElement;
    botonEditar.style.display = 'none';
  }

  // tslint:disable-next-line:typedef
  enviarDatos() {

  }


}
