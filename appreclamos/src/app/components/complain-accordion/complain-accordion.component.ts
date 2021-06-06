import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-complain-accordion',
  templateUrl: './complain-accordion.component.html',
  styleUrls: ['./complain-accordion.component.css']
})



export class ComplainAccordionComponent implements OnInit {

  reclamos: Reclamos[] = [];

  //filterargs = { rut: '1' };

  constructor(private services: ReclamosService) { }

  filterUser(reclamos: any){
    return reclamos.rut == 19581239
  }

  filterStatusEnProgreso(reclamos: any){
    return reclamos.estado == "En Progreso"
  }

  filterStatusEnviado(reclamos: any){
    return reclamos.estado == "Enviado"
  }

  filterStatusFinalizado(reclamos: any){
    return reclamos.estado == "Finalizado"
  }

  filterStatusError(reclamos: any){
    return reclamos.estado == "Error"
  }

  ngOnInit(): void {
    this.cargarReclamos();
  }

  cargarReclamos(){
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
    });
  }

    async cargarReclamosAsc(){
      this.reclamos = await this.services.cargarReclamos().toPromise();
    }
}


  