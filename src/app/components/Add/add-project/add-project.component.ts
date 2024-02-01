import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  p! :string; 
  decode_username!:string ; 
  constructor(private fb :FormBuilder, private auth:AuthService,private messageService: MessageService, private route:Router){ 

   

  } 
  
  ngOnInit(): void {
    const payload = {
      access_token : localStorage.getItem('access_token')
      
      } ; 
    this.auth.decode(payload).subscribe ( 
  
  
      (response)=> { 
        console.log(response.username); 
       this.p=response.username;  

      }
    ); 

  }
  addprojectform = this.fb.group({
    titre: ['', [Validators.required]],
    // client_username: [this.x, [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    fichier_charge: ['', Validators.required],  // Add the 'file' form control
    date_debut: ['', Validators.required],  // Add the 'startdate' form control
    date_fin: ['', Validators.required]  // Add the 'enddate' form control
  });

  get Title() {
    return this.addprojectform.get('titre');
  }

  get Client() {
    return this.addprojectform.get('Client');
  }

  get description() {
    return this.addprojectform.get('description');
  }

  // Add getters for the new form controls (file, startdate, enddate)
  get file() {
    return this.addprojectform.get('fichier_charge');
  }

  get startdate() {
    return this.addprojectform.get('date_debut');
  }

  get enddate() {
    return this.addprojectform.get('date_fin');
  }

  async onSubmit(){
     await this.auth.sendProject(this.addprojectform.value).subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Project added successfully ' });

        const payload = {
          access_token : localStorage.getItem('access_token')
          
          } ; 
        this.auth.decode(payload).subscribe ( 
          (response)=> {  
            this.decode_username=response.username ; 
            const valuetitre = this.Title ? this.Title.value : null;
            if (valuetitre !== null) {
            this.auth.assign(this.decode_username, valuetitre).subscribe ( 
    
        )}
                
            
          }) ; 
    
            
      },
      (error) => {
        console.error('Error during form data submission:', error);
      
        if (error.status === 400) {
          // Handle the specific case of a 400 Bad Request
          console.error('Bad Request Error:', error.error);
      
          // Extract and log the error message
          if (error.error && error.error.message) {
            console.error('Server Error Message:', error.error.message);
          }
          else {
            // Handle other types of errors
            console.error('Unhandled Error:', error);
        } 
        } else if(error.status==404) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'project tiltle is already used' });
          
        }
      }
      );
  
      



    
    
    
    }
}
