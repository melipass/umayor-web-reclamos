import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  error: boolean = false;
    // tslint:disable-next-line:no-inferrable-types
  email: string = '';
    // tslint:disable-next-line:no-inferrable-types
  password: string = '';

  constructor(
    private servicio: UsuariosService,
    private router: Router
  ) {  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login(){
    // var inputs = document.getElementsByTagName("input");
    // this.email = inputs.namedItem('email');
    this.servicio.login( this.email, this.password ).subscribe( response => {
      console.log(response);
      if (response){
        this.error = false;
        // tslint:disable-next-line:prefer-const
        let token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/user-home']);
        /*this.router.navigate(['/app-home-user'])*/
      }
      else{
        this.error = true;
      }
    });
  }
}
