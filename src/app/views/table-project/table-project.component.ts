import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-table-project',
  templateUrl: './table-project.component.html',
  styleUrls: ['./table-project.component.css']
})
export class TableProjectComponent {
  project: any[] = [];
  
  constructor(private projectService: AuthService) {}

  ngOnInit(): void {
    this.projectService.getProject().subscribe((response) => {
      this.project = response;
    });
  }

}
