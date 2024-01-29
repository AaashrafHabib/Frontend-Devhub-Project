import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../register/passwordmismatch.directive';
@Component({
  selector: 'app-add-administrateur',
  templateUrl: './add-administrateur.component.html',
  styleUrls: ['./add-administrateur.component.css']
})
export class AddAdministrateurComponent {
  value !: string ; 
  value1!:string ; 
  addAdminForm=this.fb.group ({

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
  return this.addAdminForm.controls['prenom']; 
}

get LastName() { 
  return this.addAdminForm.controls['nom']; 
}
get email() { 
  return this.addAdminForm.controls['email']; 
}
get password() { 
  return this.addAdminForm.controls['motdepasse']; 
}
get Username() { 
  return this.addAdminForm.controls['username']; 
} 
get Mobile() { 
  return this.addAdminForm.controls['mobile']; 
}
}
