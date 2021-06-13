import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { tokenGetter } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( public jwtHelper: JwtHelperService ) { }

  public isAuthenticated(): boolean {
    // const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if ( token )
    {
      return !this.jwtHelper.isTokenExpired(token);
    }
    else{
      return false;
    }

   // return false;
  }

}
