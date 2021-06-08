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


  id: number = 0;
  rut: string = "";
  nombre: string = "";
  apellido: string = "";
  asunto: string = "";
  textoReclamo: string = "";
  fecha: string = "";
  estado: string = "";

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
  cargarReclamos() {
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
    });
  }
  // tslint:disable-next-line:typedef
  downLoadPdf(reclamoIn: Reclamos) {
    this.pdfservices.testgenearPDf(reclamoIn);
  }
  // tslint:disable-next-line:typedef
  mostrarPDF(reclamoIn: Reclamos) {
    this.pdfservices.mostrarPDF(reclamoIn);
  }
  // tslint:disable-next-line:typedef
  async cargarReclamosAsc() {
    this.reclamos = await this.services.cargarReclamos().toPromise();
  }

  mostrarEdicion(reclamoM:Reclamos){
    const texto =document.getElementById("texto_"+reclamoM.id)as HTMLElement;
    const mostrar =document.getElementById("mostrar_"+reclamoM.id)as HTMLElement;
    const cambiar =document.getElementById("cambiar_"+reclamoM.id)as HTMLElement;

    texto.style.display="inline";
    mostrar.style.display="none";
    cambiar.style.display="inline";
  }

  enviarEstado(reclamoIn: Reclamos) {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required")) {
        if (inputs[i].value == "") {
          alert("Indique nuevo estado: (En Progreso, Enviado, Error, Finalizado)");
          return false;
        }
        if (inputs[i].value == "En Progreso", "Enviado", "Error", "Finalizado") {
          const reclamoE: Reclamos = {
            id: reclamoIn.id,
            rut: reclamoIn.rut,
            nombre: reclamoIn.nombre,
            apellido: reclamoIn.apellido,
            asunto: reclamoIn.asunto,
            textoReclamo: reclamoIn.textoReclamo,
            fecha: reclamoIn.fecha,
            estado: this.estado
          }
          this.services.editarReclamo(reclamoE).subscribe(ReclamoServidor => {
            alert("Reclamo Editado");
            document.defaultView.location.reload();
          });
          return true;
        }
      }
    }
    alert("Indique nuevo estado valido: (En Progreso, Enviado, Error, Finalizado)");
    return false;

  }
}
