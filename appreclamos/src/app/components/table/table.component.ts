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


  // tslint:disable-next-line:no-inferrable-types
  id: number = 0;
   // tslint:disable-next-line:no-inferrable-types
  rut: string = '';
   // tslint:disable-next-line:no-inferrable-types
  nombre: string = '';
   // tslint:disable-next-line:no-inferrable-types
  apellido: string = '';
   // tslint:disable-next-line:no-inferrable-types
  asunto: string = '';
   // tslint:disable-next-line:no-inferrable-types
  textoReclamo: string = '';
   // tslint:disable-next-line:no-inferrable-types
  fecha: string = '';
   // tslint:disable-next-line:no-inferrable-types
  estado: string = '';

  reclamos: Reclamos[] = [];
  constructor(
    private services: ReclamosService,
    private pdfservices: PdfserviceService
  ) {
  }

  ngOnInit(): void {
    this.cargarReclamos();
  }

  // tslint:disable-next-line:typedef
  cargarReclamos() {
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
    });
  }
  // tslint:disable-next-line:typedef
  downloadPDF(reclamoIn: Reclamos) {
    this.pdfservices.downloadPDF(reclamoIn);
  }
  // tslint:disable-next-line:typedef
  mostrarPDF(reclamoIn: Reclamos) {
    this.pdfservices.mostrarPDF(reclamoIn);
  }
  // tslint:disable-next-line:typedef
  async cargarReclamosAsc() {
    this.reclamos = await this.services.cargarReclamos().toPromise();
  }
// tslint:disable-next-line:typedef
  mostrarEdicion(reclamoM: Reclamos){
    const texto = document.getElementById('texto_' + reclamoM.id)as HTMLElement;
    const mostrar = document.getElementById('mostrar_' + reclamoM.id)as HTMLElement;
    const cambiar = document.getElementById('cambiar_' + reclamoM.id)as HTMLElement;
    texto.style.display = 'inline';
    mostrar.style.display = 'none';
    cambiar.style.display = 'inline';
  }
// tslint:disable-next-line:typedef
  enviarEstado(reclamoIn: Reclamos) {
    // tslint:disable-next-line:no-var-keyword
    var inputs = document.getElementsByTagName('select');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < inputs.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (inputs[i].value == '') {
        alert('Indique nuevo estado: (En Progreso, Enviado, Error, Finalizado) ');
        return false;
      }
      // tslint:disable-next-line:triple-equals
      if (inputs[i].value == 'En Progreso", "Enviado", "Error", "Finalizado') {
        const reclamoE: Reclamos = {
          id: reclamoIn.id,
          rut: reclamoIn.rut,
          nombre: reclamoIn.nombre,
          apellido: reclamoIn.apellido,
          asunto: reclamoIn.asunto,
          textoReclamo: reclamoIn.textoReclamo,
          fecha: reclamoIn.fecha,
          estado: this.estado
        };
        this.services.editarReclamo(reclamoE).subscribe(ReclamoServidor => {
          alert('Reclamo Editado');
          document.defaultView.location.reload();
        });
        return true;
      }
    }
    alert('Indique nuevo estado valido: (En Progreso, Enviado, Error, Finalizado)');
    return false;

  }
}