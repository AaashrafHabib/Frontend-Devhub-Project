import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../register/passwordmismatch.directive';

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
    username : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    motdepasse: ['', Validators.required],

  },  {
    validators: passwordMatchValidator
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
  },
  (error) => {
    console.error('Erreur lors de l\'envoi du formulaire :', error);
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
