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

onsubmit() { 
console.log(this.addConsultantForm)

}
}
