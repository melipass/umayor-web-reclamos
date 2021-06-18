import { Component, OnInit } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-complain-cards',
  templateUrl: './complain-cards.component.html',
  styleUrls: ['./complain-cards.component.css']
})
export class ComplainCardsComponent implements OnInit {

  reclamos: Reclamos[] = [];
  reclamosProgreso: Reclamos[] = [];
  reclamosFinalizado: Reclamos[] = [];
  reclamosError: Reclamos[] = [];

  constructor(private services: ReclamosService) { }

  ngOnInit(): void {
    this.cargarReclamos();
  }

  cargarReclamos() {
    this.services.cargarReclamos().subscribe(ReclamosService => {
      this.reclamos = ReclamosService;
      console.log(this.reclamos);
      for (const a of this.reclamos) {
        if (a.estado == "En Progreso") this.reclamosProgreso.push(a);
        else if (a.estado == "Finalizado") this.reclamosFinalizado.push(a);
        else if (a.estado == "Error") this.reclamosError.push(a);
      }
    });
  }

}
