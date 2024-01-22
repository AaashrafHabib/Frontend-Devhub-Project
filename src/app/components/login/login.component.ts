import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
countries: any[] | undefined;
selectedCity: any;
  value!: string;
responsedata : any ; 
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    Password: ['', Validators.required], 
    selectedRole : ['', Validators.required]

  })
constructor(private fb :FormBuilder,private auth:AuthService,private route:Router, private message:MessageService){} 

get email(){ 
  return this.loginForm.controls['email']; 
}
get Password() { return this.loginForm.controls['Password']; }
// loginuser() { 
//    console.log(this.loginForm.value)
//   const {email,Password}= this.loginForm.value; 
//   this.auth.getUserByEmail(email as string).subscribe( 


//     (response)=> {
// if (response.length >0 && response[0].password==Password){ 
//   this.message.add({ severity: 'success', summary: 'Success', detail: 'Login successfull' });
//   this.route.navigate(['/home']);
// }else { 
//   this.message.add({ severity: 'error', summary: 'Error', detail: 'Login failed,email or password is wrong' });
// }
//     },
//     (error)=> { 
//       this.message.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
//     } 
//   )
// } 
loginuser( ){ 
  this.auth.register(this.loginForm.value as User).subscribe(result => {
    if(result!=null){
      this.message.add({ severity: 'success', summary: 'Success', detail: 'Login successfull' });
      this.responsedata=result;
      localStorage.setItem('token',this.responsedata.jwtToken)
      this.route.navigate(['home'])
    }

  });
}

ngOnInit() {
}

}



