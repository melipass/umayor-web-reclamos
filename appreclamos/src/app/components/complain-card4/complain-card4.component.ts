import { Component, OnInit } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-complain-card4',
  templateUrl: './complain-card4.component.html',
  styleUrls: ['./complain-card4.component.css']
})

export class ComplainCard4Component implements OnInit {

  reclamos: Reclamos[] = [];
  reclamosError: Reclamos[]=[];
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
        if (this.dato=="Error"){
          this.reclamosError.push(a)
          }        
      }
    });
  }
}