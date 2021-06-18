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
  rut: string = '';
  nombre: string = '';
  apellido: string = '';
  asunto: string = '';
  textoReclamo: string = '';
  fecha: string = '';
  estado: string = '';
  abierto: number = 0;
  reclamos: Reclamos[] = [];

  constructor( private services: ReclamosService, private pdfservices: PdfserviceService ) { }

  ngOnInit(): void { this.cargarReclamos(); }

  cargarReclamos() { this.services.cargarReclamos().subscribe(ReclamosServices => { this.reclamos = ReclamosServices; }); }

  downloadPDF(reclamoIn: Reclamos) { this.pdfservices.downloadPDF(reclamoIn); }

  mostrarPDF(reclamoIn: Reclamos) { this.pdfservices.mostrarPDF(reclamoIn); }
  
  async cargarReclamosAsc() { this.reclamos = await this.services.cargarReclamos().toPromise(); }

  mostrarEdicion(reclamoM: Reclamos){
    if (this.abierto == 0) this.abierto = reclamoM.id;
    else{
      const texto_old = document.getElementById('texto_' + this.abierto)as HTMLElement;
      const mostrar_old = document.getElementById('mostrar_' + this.abierto)as HTMLElement;
      const cambiar_old = document.getElementById('cambiar_' + this.abierto)as HTMLElement;
      const cancelar_old = document.getElementById('cancelar_' + this.abierto)as HTMLElement;
      const label_old = document.getElementById('label_' + this.abierto)as HTMLElement;
      texto_old.style.display = 'none';
      mostrar_old.style.display = 'inline';
      cambiar_old.style.display = 'none';
      cancelar_old.style.display = 'none';
      label_old.style.display = 'inline';
    }
    this.estado = reclamoM.estado;
    const texto = document.getElementById('texto_' + reclamoM.id)as HTMLElement;
    const mostrar = document.getElementById('mostrar_' + reclamoM.id)as HTMLElement;
    const cambiar = document.getElementById('cambiar_' + reclamoM.id)as HTMLElement;
    const cancelar = document.getElementById('cancelar_' + reclamoM.id)as HTMLElement;
    const label = document.getElementById('label_' + this.abierto)as HTMLElement;
    texto.style.display = 'inline';
    mostrar.style.display = 'none';
    cambiar.style.display = 'inline';
    cancelar.style.display = 'inline';
    label.style.display = 'none';
    this.abierto = reclamoM.id;
  }

  cancelarEdicion(reclamoM: Reclamos){
      const texto = document.getElementById('texto_' + this.abierto)as HTMLElement;
      const mostrar = document.getElementById('mostrar_' + this.abierto)as HTMLElement;
      const cambiar = document.getElementById('cambiar_' + this.abierto)as HTMLElement;
      const cancelar = document.getElementById('cancelar_' + this.abierto)as HTMLElement;
      const label = document.getElementById('label_' + this.abierto)as HTMLElement;
      texto.style.display = 'none';
      mostrar.style.display = 'inline';
      cambiar.style.display = 'none';
      cancelar.style.display = 'none';
      label.style.display = 'inline';
      this.abierto = 0;
  }

  enviarEstado(reclamoIn: Reclamos) {
    this.estado = (<HTMLInputElement>document.getElementById('texto_' + reclamoIn.id)).value;
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
  }
}