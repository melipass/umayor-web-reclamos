import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  reclamos: Reclamos[] = [];
  private datos = [];
  private dato: string;
  public numeroError: number = 0;
  public numeroenProgreso: number = 0;
  public numeroFinalizado: number = 0;

  public pieChartLabels: Label[] = ['Error', 'En Progreso', 'Finalizado'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartData: SingleDataSet = [1, 1, 1];
  public pieCharColors;


  constructor(private services: ReclamosService) { }

  ngOnInit(): void {
    this.cargarReclamos();
  }

  cargarReclamos() {
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
      for (const a of this.reclamos) {
        this.dato = a.estado;
        if (this.dato == "Error") {
          this.numeroError++;
        }
        if (this.dato == "En Progreso") {
          this.numeroenProgreso++;
        }
        if (this.dato == "Finalizado") {
          this.numeroFinalizado++;
        }
        this.pieChartData = [this.numeroError, this.numeroenProgreso, this.numeroFinalizado];
      }
    });
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
}