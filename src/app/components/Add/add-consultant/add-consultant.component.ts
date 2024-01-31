import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../register/passwordmismatch.directive';
@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css']
})
export class AddConsultantComponent {
  value !: string ; 
  value1!:string ; 
  addConsultantForm=this.fb.group ({

    prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]], 
    nom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]], 
    username : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required,Validators.pattern(/^\d+$/)]],
    motdepasse: ['', Validators.required],

  },  {
    validators: passwordMatchValidator
  })
constructor(private fb :FormBuilder, private auth:AuthService,private messageService: MessageService, private route:Router){} 

get FirstName() { 
  return this.addConsultantForm.controls['prenom']; 
}
get Mobile() { 
  return this.addConsultantForm.controls['mobile']; 
}

get LastName() { 
  return this.addConsultantForm.controls['nom']; 
}
get email() { 
  return this.addConsultantForm.controls['email']; 
}
get password() { 
  return this.addConsultantForm.controls['motdepasse']; 
}
get Username() { 
  return this.addConsultantForm.controls['username']; 
}  


onSubmit(){
  this.auth.sendConsultant(this.addConsultantForm.value).subscribe(
  (response) => {
    console.log('Réponse du serveur :', response);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'consultant added successfully ' });
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
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'username already used' });
      
    }
  }
  );
  
  
  
  }


}
