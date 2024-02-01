import { Component,Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chart-v2',
  templateUrl: './chart-v2.component.html',
  styleUrls: ['./chart-v2.component.css']
})
export class ChartV2Component implements OnInit{
  @Input() cardWidth: string = '460px';
  @Input() cardheight: string = '500px';
  NOT_started:number=0; 
  In_progress:number=0; 
  done:number=0; 
  data: any;

  options: any;

  statustable: any[] = [];
  project: any[] = [];
  
    constructor(private projectService: AuthService) {}

    

  ngOnInit() {
    this.projectService.getProject().subscribe((response) => {
    this.project = response;
    console.log(this.project[0].status);

    for (const prjt of this.project) {
        if (prjt.status == 'Not Started') {
          this.NOT_started = this.NOT_started + 1;
        }
        if (prjt.status == 'In Progress') {
          this.In_progress = this.In_progress + 1;
        }
        if (prjt.status == 'Done') {
          this.done = this.done + 1;
        }
      }

      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
        labels: ['Not Started', 'In Progress', 'Done'],
        datasets: [
          {
            data: [this.NOT_started, this.In_progress, this.done],
            backgroundColor: [
              documentStyle.getPropertyValue('--blue-500'),
              documentStyle.getPropertyValue('--yellow-500'),
              documentStyle.getPropertyValue('--green-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--blue-400'),
              documentStyle.getPropertyValue('--yellow-400'),
              documentStyle.getPropertyValue('--green-400'),
            ],
          },
        ],
      };

      this.options = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor,
            },
          },
        },
      };

      console.log(this.data);
    });
  }
}