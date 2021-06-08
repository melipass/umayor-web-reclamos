import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-complain-accordion',
  templateUrl: './complain-accordion.component.html',
  styleUrls: ['./complain-accordion.component.css']
})



export class ComplainAccordionComponent implements OnInit {

  @Input() reclamos: Reclamos[] = [];

  // filterargs = { rut: '1' };

  constructor(private services: ReclamosService) { }

  // tslint:disable-next-line:typedef
  filterStatusEnProgreso(reclamos: any){
    return reclamos.estado == "En Progreso";
  }

  // tslint:disable-next-line:typedef
  filterStatusEnviado(reclamos: any){
    return reclamos.estado == "Enviado"
  }

  // tslint:disable-next-line:typedef
  filterStatusFinalizado(reclamos: any){
    return reclamos.estado == "Finalizado"
  }

  // tslint:disable-next-line:typedef
  filterStatusError(reclamos: any){
    return reclamos.estado == "Error"
  }

  ngOnInit(): void {
    this.cargarReclamos();
    this.services.getReclamos().subscribe(
      (reclamos: Reclamos[]) => {
        this.reclamos = reclamos;
      }
    );
  }
 // tslint:disable-next-line:typedef
  cargarReclamos(){
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
    });
  }
 // tslint:disable-next-line:typedef
    async cargarReclamosAsc(){
      this.reclamos = await this.services.cargarReclamos().toPromise();
    }
}