import { Component, Input, OnInit } from '@angular/core';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-table-answer-modal',
  templateUrl: './table-answer-modal.component.html',
  styleUrls: ['./table-answer-modal.component.css']
})
export class TableAnswerModalComponent implements OnInit {


  id: number;
  @Input() reclamos: Reclamos[] = [];
  rut: string = '';  
  nombre: string = '';
  apellido: string = '';
  asunto: string = '';
  textoReclamo: string = '';
  fecha: string = '';
  estado: string = '';
  respuesta: string[] = [];

  constructor( private services: ReclamosService ) { }

  ngOnInit(): void { 
  }

  botonEnviar(){
    this.id = Number(localStorage.getItem('idReclamo'));
    var reclamo = this.reclamos.find(e => e.id == this.id);
    console.log(reclamo);
    this.enviarRespuesta(reclamo);
  }

  enviarRespuesta(reclamo: Reclamos) {
    this.respuesta = reclamo.respuestas;
    const nuevaRespuesta = document.getElementById('answer-textarea') as HTMLTextAreaElement;
    this.respuesta.push(nuevaRespuesta.value);
    console.log(this.respuesta);
    const reclamoConRespuesta: Reclamos = {
      id: reclamo.id,
      rut: reclamo.rut,
      nombre: reclamo.nombre,
      apellido: reclamo.apellido,
      asunto: reclamo.asunto,
      textoReclamo: reclamo.textoReclamo,
      fecha: reclamo.fecha,
      estado: reclamo.estado,
      respuestas: this.respuesta
    };
    console.log(reclamoConRespuesta);
    this.services.editarReclamo(reclamoConRespuesta).subscribe(ReclamoServidor => {
      alert('Reclamo Editado');
      document.defaultView.location.reload();
    });
  }
  

}
