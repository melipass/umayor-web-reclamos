import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../clases/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
    
   }

   login( email: string, password: string ){
    return this.http.post<any>("http://localhost:3001/admin", { email:email, password:password});
  }
}
