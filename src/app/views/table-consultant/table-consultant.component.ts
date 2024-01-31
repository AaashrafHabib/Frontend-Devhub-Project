import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-table-consultant',
  templateUrl: './table-consultant.component.html',
  styleUrls: ['./table-consultant.component.css']
})
export class TableConsultantComponent { 
    consultant: any[] = [];
  
    constructor(private consultantService: AuthService) {}
  
    ngOnInit(): void {
      this.consultantService.getConsultant().subscribe((data) => {
        this.consultant = data;
        console.log(this.consultant)
      });
    }

}
