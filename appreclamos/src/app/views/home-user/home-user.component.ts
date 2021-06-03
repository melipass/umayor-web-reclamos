import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/clases/usuarios';
import {UsuariosService} from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  usuario: Usuarios[] = [];
  constructor(private services: UsuariosService) { }

  ngOnInit(): void {
    this.services.cargarDatosUsuarios(1).subscribe();
  }


}
