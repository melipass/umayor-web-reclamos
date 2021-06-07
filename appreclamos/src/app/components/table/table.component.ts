import { Component, OnInit } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { PdfserviceService } from 'src/app/services/pdfservice.service';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {


  reclamos: Reclamos[] = [];
  constructor(
    private services: ReclamosService,
    private pdfservices: PdfserviceService
    ) {
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
  downLoadPdf(reclamoIn: Reclamos)
  {
    this.pdfservices.testgenearPDf(reclamoIn);
  }
  // tslint:disable-next-line:typedef
  mostrarPDF(reclamoIn: Reclamos)
  {
    this.pdfservices.mostrarPDF(reclamoIn);
  }
  // tslint:disable-next-line:typedef
  async cargarReclamosAsc()
  {
    this.reclamos = await this.services.cargarReclamos().toPromise();
  }
}
