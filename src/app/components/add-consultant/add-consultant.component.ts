import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../register/passwordmismatch.directive';
@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css']
})
export class AddConsultantComponent {
  value !: string ; 
  value1!:string ; 
  addConsultantForm=this.fb.group ({

    FirstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]], 
    LastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]], 
    Username : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    Mobile: ['', [Validators.required]],
    password: ['', Validators.required],

  },  {
    validators: passwordMatchValidator
  })
constructor(private fb :FormBuilder, private auth:AuthService,private messageService: MessageService, private route:Router){} 

get FirstName() { 
  return this.addConsultantForm.controls['FirstName']; 
}
get Mobile() { 
  return this.addConsultantForm.controls['Mobile']; 
}

get LastName() { 
  return this.addConsultantForm.controls['LastName']; 
}
get email() { 
  return this.addConsultantForm.controls['email']; 
}
get password() { 
  return this.addConsultantForm.controls['password']; 
}
get Username() { 
  return this.addConsultantForm.controls['Username']; 
} 
}
