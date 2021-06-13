import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  error:boolean = false;
  email:string = '';
  password:string = '';

  constructor(
    private servicioUsuario:UsuariosService,
    private router: Router
  ) {  }

  ngOnInit(): void {
  }

  login(){
    this.servicioUsuario.login( this.email, this.password ).subscribe( response =>{
      if (response){
        this.error = false;
        let token = response['token'];
        localStorage.setItem('token',token);
        let id = response['id'];
        localStorage.setItem('id',id);
        this.router.navigate(['/user-home'])
      }
      else{
        this.error = true;
      }
    });
  }
}
