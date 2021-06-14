import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Reclamos } from '../clases/reclamos';

@Injectable({
  providedIn: 'root'
})
export class PdfserviceService {

  constructor() { }

  downloadPDF(reclamo: Reclamos): void
  {
    const doc = new jsPDF();
    const img = new Image();
    img.src = 'assets/LOGO-UM-NEGRO-H.png';
    doc.addImage(img, 'png', 20, 10, 60, 10);
    doc.text(20, 35, 'Reclamo ID:' + reclamo.id);
    doc.text(20, 45, 'Rut:' + reclamo.rut);
    doc.text(20, 55, 'Nombre Usuario:' + reclamo.nombre + ' ' + reclamo.apellido );
    doc.text(20, 65, 'Asunto:' + reclamo.asunto);
    doc.text(150, 20, 'Fecha:' + reclamo.fecha);
    doc.text(20, 75, 'Estado:' + reclamo.estado);
    doc.text(20, 85, 'Contenido:');
    const splitTitle = doc.splitTextToSize( reclamo.textoReclamo, 180);
    doc.text(20, 95, splitTitle);
    doc.save( 'Reclamo-' + reclamo.id + '.pdf');
  }

  mostrarPDF(reclamo: Reclamos): void
  {
    const doc = new jsPDF();
    const img = new Image();
    img.src = 'assets/LOGO-UM-NEGRO-H.png';
    doc.addImage(img, 'png', 20, 10, 60, 10);
    doc.text(20, 35, 'Reclamo ID:' + reclamo.id);
    doc.text(20, 45, 'Rut:' + reclamo.rut);
    doc.text(20, 55, 'Nombre Usuario:' + reclamo.nombre + ' ' + reclamo.apellido );
    doc.text(20, 65, 'Asunto:' + reclamo.asunto);
    doc.text(150, 20, 'Fecha:' + reclamo.fecha);
    doc.text(20, 75, 'Estado:' + reclamo.estado);
    doc.text(20, 85, 'Contenido:');
    const splitTitle = doc.splitTextToSize( reclamo.textoReclamo, 180);
    doc.text(20, 95, splitTitle);
    doc.output('dataurlnewwindow');
  }
}