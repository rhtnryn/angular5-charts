import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartColor } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit {
  @ViewChild('graph') graph: ElementRef;
  months: Array<string>;
  companyOne: Array<number>;
  constructor() {
    this.months = ["January", "February", "March", "April", "May"];
    this.companyOne = [
      1200000,
      1300000,
      1400000,
      1500000,
      1600000
    ]
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.generateGraph();
  }

  generateGraph(){
    let graphCtx = this.graph.nativeElement.getContext('2d');
    var chart = new Chart(graphCtx, {
      type: 'pie',
      data: {
        datasets: [{
          data: this.companyOne,
            backgroundColor: [
              '#FF3D67',
              '#FF9124',
              '#FFCD56',
              '#FFCD56',
              '#059BFF',
            ],
            label: 'Dataset 1'
        }],
        labels: this.months
    },
    options: {
        responsive: true
    }
    });
    graphCtx.canvas.parentNode.style.height = '500px';
  }

}
