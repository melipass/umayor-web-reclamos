import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamos } from '../clases/reclamos';


@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  cargarReclamos(){
    return this.http.get<Reclamos[]>('http://localhost:3000/reclamos');
    console.log('get1 works');
  }
}
