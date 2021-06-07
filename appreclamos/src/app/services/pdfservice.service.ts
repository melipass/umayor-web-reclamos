import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Reclamos } from '../clases/reclamos';

@Injectable({
  providedIn: 'root'
})
export class PdfserviceService {

  constructor() { }

testgenearPDf(reclamo: Reclamos): void
{
  const doc = new jsPDF();
  doc.rect(10, 10, 100, 100, 'F');
  doc.text(20, 20, 'Reclamo ID:' + reclamo.id);
  doc.text(20, 30, 'Reclamo Rut:' + reclamo.rut);
  doc.text(20, 40, 'Reclamo Nombre Usuario:' + reclamo.nombre + ' ' + reclamo.apellido );
  doc.text(20, 50, 'Reclamo Asunto:' + reclamo.asunto);
  doc.text(20, 60, 'Reclamo Contenido:' + reclamo.textoReclamo);
  doc.text(20, 70, 'Reclamo Fecha:' + reclamo.fecha);
  doc.text(20, 80, 'Reclamo Estado:' + reclamo.estado);
  doc.addPage();
  doc.save( 'Reclamo-' + reclamo.id + '.pdf');
}

mostrarPDF(reclamo: Reclamos): void
{
  const doc = new jsPDF();
  doc.text(20, 20, 'Reclamo ID:' + reclamo.id);
  doc.text(20, 30, 'Reclamo Rut:' + reclamo.rut);
  doc.text(20, 40, 'Reclamo Nombre Usuario:' + reclamo.nombre + ' ' + reclamo.apellido );
  doc.text(20, 50, 'Reclamo Asunto:' + reclamo.asunto);
  doc.text(20, 60, 'Reclamo Contenido:' + reclamo.textoReclamo);
  doc.text(20, 70, 'Reclamo Fecha:' + reclamo.fecha);
  doc.text(20, 80, 'Reclamo Estado:' + reclamo.estado);
  doc.addPage();
  doc.output('dataurlnewwindow');
}
}



