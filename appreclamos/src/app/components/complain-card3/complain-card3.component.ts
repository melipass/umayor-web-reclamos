import { Component, OnInit } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-complain-card3',
  templateUrl: './complain-card3.component.html',
  styleUrls: ['./complain-card3.component.css']
})
export class ComplainCard3Component implements OnInit {

  reclamos: Reclamos[] = [];
  reclamosF: Reclamos[]=[];
  private dato: string;
  
  constructor(private services: ReclamosService) { }

  ngOnInit(): void {
    this.cargarReclamos();
  }

  cargarReclamos(){
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
      for(const a of this.reclamos){

        this.dato = a.estado;
        if (this.dato=="Finalizado"){
          this.reclamosF.push(a)
          }        
      }
    });
  }
}