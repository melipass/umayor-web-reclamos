import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-sla-pie',
  templateUrl: './sla-pie.component.html',
  styleUrls: ['./sla-pie.component.css']
})
export class SlaPieComponent implements OnInit {

  reclamos: Reclamos[] = [];
  private datos = [];
  private dato: string;
  public numeroError: number = 0;
  public numeroOK: number = 0;

  public pieChartLabels: Label[] = ['Atrasado', 'OK'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartData: SingleDataSet = [1, 1];
  public charColors;

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
        if (this.dato != "Error") {
          this.numeroOK++;
        }
        this.pieChartData = [this.numeroError, this.numeroOK];
      }
    });
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
}