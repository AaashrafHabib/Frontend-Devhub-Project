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

    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]], 
    Username : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  },  {
    validators: passwordMatchValidator
  })
constructor(private fb :FormBuilder, private auth:AuthService,private messageService: MessageService, private route:Router){} 

get fullName() { 
  return this.addClientForm.controls['fullName']; 
}
get email() { 
  return this.addClientForm.controls['email']; 
}
get password() { 
  return this.addClientForm.controls['password']; 
}
get Username() { 
  return this.addClientForm.controls['Username']; 
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
