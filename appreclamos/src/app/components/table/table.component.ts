import { Component, OnInit } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {


  reclamos: Reclamos[] = [];
  constructor(private services: ReclamosService ) {
  }

  ngOnInit(): void {
    this.cargarReclamos();
    // this.downloadPDF();
  }

  // tslint:disable-next-line:typedef
  cargarReclamos(){
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
    });
  }

  // tslint:disable-next-line:typedef
  async cargarReclamosasc()
  {
    this.reclamos = await this.services.cargarReclamos().toPromise();
  }
}
