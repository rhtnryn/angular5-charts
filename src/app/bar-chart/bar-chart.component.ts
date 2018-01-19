import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartColor } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('graph') graph: ElementRef;
  months: Array<string>;
  companyOne: Array<number>;
  constructor() {
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.companyOne = [
      1200000,
      1300000,
      1400000,
      1500000,
      1600000,
      1700000,
      1600000,
      1500000,
      1400000,
      1300000,
      1200000,
      1100000
    ]
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.generateGraph();
  }

  generateGraph(){
    let graphCtx = this.graph.nativeElement.getContext('2d');
    let barChartData: any = {
        labels: this.months,
        datasets: [{
            label: 'Company One',
            backgroundColor: 'rgba(255, 178, 179, 0.5)',
            borderColor: 'rgba(255, 112, 142, 1)',
            borderWidth: 1,
            data: this.companyOne
        }]

    };
    var chart = new Chart(graphCtx, {
      type: 'bar',
      data: barChartData,
      options: {
          responsive: true,
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Monthly Revenue Bar Chart'
          }
      }
    });
    graphCtx.canvas.parentNode.style.height = '500px';
  }

}
