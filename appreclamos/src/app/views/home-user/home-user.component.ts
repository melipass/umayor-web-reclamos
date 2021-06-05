import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reclamos } from 'src/app/clases/reclamos';
import { Usuarios } from 'src/app/clases/usuarios';
import { ReclamosService } from 'src/app/services/reclamos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css'],
  providers: [DatePipe]
})
export class HomeUserComponent implements OnInit {

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
    private activatedRoute: ActivatedRoute
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

    const nombreTest  = document.getElementById('inputNombre');
    console.log('testing', nombreTest);
    const newReclamo: Reclamos = {
      id: 7,
      rut: this.rutUsuarioReclamo,
      nombre: this.nombreUsuarioReclamo,
      apellido: this.apellidoUsuarioReclamo,
      asunto: this.asuntoReclamo,
      textoReclamo: this.textoReclamo,
      fecha: '02/10/21',
      estado: 'Enviado'

    };
    console.log(newReclamo);

    /*this.servicio2.agregarReclamoDeUsuario(newReclamo).subscribe(
      reclamoService => {
        alert('Reclamo se envio');
      }
    );*/
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


}
