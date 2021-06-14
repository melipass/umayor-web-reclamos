
import { Component, OnInit, SecurityContext } from '@angular/core';
/*import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';*/

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})

export class PdfReaderComponent implements OnInit {
  /*reclamos: Reclamos[] = [];*/

  constructor(/*private services: ReclamosService */) {
    //this.pdf = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(this.createPDF())) as string;
  }

  /*public downloadPDF(): void {
    const doc = new jsPDF();
    doc.text(this.reclamos.toString(), 15, 15);
    var iframe = document.createElement('iframe');
    //let iframe = document.getElementById('iframe') as HTMLIFrameElement;
    //iframe.src = doc.output('datauristring')
    //iframe.src = 'generated.pdf'
    doc.text('Hello world!', 10, 10);
    iframe.setAttribute('style','position:inherit;right:0; top:0; bottom:0; height:600px; width:650px; padding:20px;');
    document.body.appendChild(iframe);
    //console.log(doc.output('datauristring'))
    iframe.src = doc.output('datauristring');
  }

  public downloadPDF2(): void{
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p','pt','a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA,options).then((canvas)=>{
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }

*/
  ngOnInit(): void {
    // this.cargarReclamos();
    // this.downloadPDF();
  }
  /*
    cargarReclamos(){
      this.services.cargarReclamos().subscribe(ReclamosServices => {
        this.reclamos = ReclamosServices;
      });
    }
  
    async cargarReclamosasc()
    {
      this.reclamos = await this.services.cargarReclamos().toPromise();
    }
  
    downloadPDFqueestabaentablecomponent() {
      const DATA = document.getElementById('htmlData');
      const doc = new jsPDF('p', 'pt', 'a4');
      const options = {
        background: 'white',
        scale: 3
      };
      html2canvas(DATA, options).then((canvas: HTMLCanvasElement) => {
  
        const img = canvas.toDataURL('image/PNG');
  
        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
        return doc;
      }).then((docResult) => {
        docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
      });*/
}