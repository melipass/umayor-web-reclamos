import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamos } from '../clases/reclamos';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  private reclamosAc: BehaviorSubject<Reclamos[]> = new BehaviorSubject<Reclamos[]>([]);
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getReclamos(): Observable<Reclamos[]> {
    return this.reclamosAc.asObservable();
  }

  // tslint:disable-next-line:typedef
  setReclamos(reclamos: Reclamos[]): void {
    this.reclamosAc.next(reclamos);
  }

  // tslint:disable-next-line:typedef
  cargarReclamos() {
    return this.http.get<Reclamos[]>('http://localhost:3000/reclamos');
  }

  // tslint:disable-next-line:typedef
  cargarReclamosDeUnUsuario(rut: string) {
    return this.http.get<Reclamos[]>('http://localhost:3000/reclamos?rut=' + rut);
  }

  // tslint:disable-next-line:typedef
  agregarReclamoDeUsuario(reclamo: Reclamos) {
    return this.http.post<Reclamos>('http://localhost:3000/reclamos', reclamo);
  }
// tslint:disable-next-line:typedef
  editarReclamo(reclamo: Reclamos) {
    return this.http.put('http://localhost:3000/reclamos/' + reclamo.id, reclamo);
  }
// tslint:disable-next-line:typedef
  obtenerReclamo(id: Reclamos) {
    return this.http.get('http://localhost:3000/reclamos' + id);
  }
}