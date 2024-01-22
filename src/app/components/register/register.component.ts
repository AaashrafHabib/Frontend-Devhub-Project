import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from './passwordmismatch.directive';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  value !: string ; 
  value1!:string ; 
  registerForm=this.fb.group ({

    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]

  },  {
    validators: passwordMatchValidator
  })
constructor(private fb :FormBuilder, private auth:AuthService,private messageService: MessageService, private route:Router){} 

get fullName() { 
  return this.registerForm.controls['fullName']; 
}
get email() { 
  return this.registerForm.controls['email']; 
}
get password() { 
  return this.registerForm.controls['password']; 
}
get confirmPassword() { 
  return this.registerForm.controls['confirmPassword']; 
} 
submit(){ 
  const postData = { ...this.registerForm.value }; 
  delete postData.confirmPassword; 
  this.auth.register(postData as User).subscribe(  
    (Response)=> {
console.log(Response);
this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfull' });
this.route.navigate(['login']); 
    }, 
    (error)=> { 
console.log(error);
this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Register failed' });
    }
    )
}
}
