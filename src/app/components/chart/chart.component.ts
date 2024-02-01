import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  @Input() cardWidth: string = '850px';
  @Input() cardheight: string = '500px';
  projects: any[] = [];
  clients: any[] = [];
  consultants: any[] = [];
  projectCount: number = 0;
  clientCount: number = 0;
  consultantCount: number = 0;

  constructor(
    private projectService: AuthService,
    private consultantService: AuthService,
    private clientService: AuthService
  ) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.projectService.getProject().subscribe((response) => {
      this.projects = response;
      this.projectCount = this.projects.length;
      this.basicData = this.createChartData();
    });

    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
      this.clientCount = this.clients.length;
      this.basicData = this.createChartData();
    });

    this.consultantService.getConsultant().subscribe((data) => {
      this.consultants = data;
      this.consultantCount = this.consultants.length;
      this.basicData = this.createChartData();
    });

    // Initial data
    this.basicData = this.createChartData();
  }

  createChartData() {
    return {
      labels: ['Projects', 'Clients', 'Consultants'],
      datasets: [
        {
          label: 'Count',
          data: [this.projectCount, this.clientCount, this.consultantCount],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
          borderWidth: 1
        }
      ]
    };
  }
}
