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
    private servicio:UsuariosService,
    private router: Router
  ) {  }

  ngOnInit(): void {
  }

  login(){
    //var inputs = document.getElementsByTagName("input");
    //this.email = inputs.namedItem('email');
    this.servicio.login( this.email, this.password ).subscribe( response =>{
      console.log(response);
      if (response){
        this.error = false;
        let token = response['token'];
        localStorage.setItem('token',token);
        this.router.navigate(['/user-home'])
        /*this.router.navigate(['/app-home-user'])*/
      }
      else{
        this.error = true;
      }
    });
  }
}
