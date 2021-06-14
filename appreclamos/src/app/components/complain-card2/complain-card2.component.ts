import { Component, OnInit } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-complain-card2',
  templateUrl: './complain-card2.component.html',
  styleUrls: ['./complain-card2.component.css']
})
export class ComplainCard2Component implements OnInit {

  reclamos: Reclamos[] = [];
  reclamosE: Reclamos[] = [];
  private dato: string;

  constructor(private services: ReclamosService) { }

  ngOnInit(): void {
    this.cargarReclamos();
  }

  cargarReclamos() {
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
      for (const a of this.reclamos) {

        this.dato = a.estado;
        if (this.dato == "En Progreso") {
          this.reclamosE.push(a)
        }
      }
    });
  }
}