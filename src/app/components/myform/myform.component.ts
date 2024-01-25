import { Component,Input  } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {
  value !: string ; 
  constructor(private fb: FormBuilder) {}
    @Input() formGroup = this.fb.group({
      FirstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]], 
      LastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]], 
      Username : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', [Validators.required, Validators.email]],
      Mobile: ['', [Validators.required]],
      password: ['', Validators.required],
    }); 


    get FirstName() { 
      return this.formGroup.controls['FirstName']; 
    }
    get Mobile() { 
      return this.formGroup.controls['Mobile']; 
    }
    
    get LastName() { 
      return this.formGroup.controls['LastName']; 
    }
    get email() { 
      return this.formGroup.controls['email']; 
    }
    get password() { 
      return this.formGroup.controls['password']; 
    }
    get Username() { 
      return this.formGroup.controls['Username']; 
    }  

    onSubmit(){ 

console.log(this.formGroup.value)
    }
}
