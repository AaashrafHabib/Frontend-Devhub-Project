import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  value !: string ; 
  value1!:string ; 
  addClientForm=this.fb.group ({

    prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  nom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    username : ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    motdepasse: ['', Validators.required],

  })
constructor(private fb :FormBuilder, private auth:AuthService,private messageService: MessageService, private route:Router){} 

get FirstName() { 
  return this.addClientForm.controls['prenom']; 
}

get LastName() { 
  return this.addClientForm.controls['nom']; 
}
get email() { 
  return this.addClientForm.controls['email']; 
}
get password() { 
  return this.addClientForm.controls['motdepasse']; 
}
get Mobile() { 
  return this.addClientForm.controls['mobile']; 
}
get Username() { 
  return this.addClientForm.controls['username']; 
} 
onSubmit(){
this.auth.sendFormData(this.addClientForm.value).subscribe(
(response) => {
  console.log('Réponse du serveur :', response);
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'client added successfully ' });
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
// submit(){ 
//   const postData = { ...this.addClientForm.value }; 
//   delete postData.confirmPassword; 
//   this.auth.register(postData as User).subscribe(  
//     (Response)=> {
// console.log(Response);
// this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfull' });
// this.route.navigate(['login']); 
//     }, 
//     (error)=> { 
// console.log(error);
// this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Register failed' });
//     }
//     )
// }
}
