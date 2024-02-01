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
    username: ['', [Validators.required]],
    password: ['', Validators.required], 
    role : ['', Validators.required]

  })
constructor(private fb :FormBuilder,private auth:AuthService,private route:Router, private message:MessageService){} 

get username(){ 
  return this.loginForm.controls['username']; 
}
get Password() { return this.loginForm.controls['password']; }
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
      localStorage.setItem('token',this.responsedata.jwtToken);
      this.route.navigate(['home']);
    }

  });
}
onSubmit()
{   

  this.auth.login(this.loginForm.value).subscribe(
    (response) => { 
      console.log('Réponse du serveur :', response);
      this.message.add({ severity: 'success', summary: 'Success', detail: 'Login successfull' });
        localStorage.setItem('access_token',response.access_token);
    
         
          localStorage.setItem('admin_username',JSON.stringify(this.loginForm.value.username));
           this.route.navigate (["home"]);
    
      //  if (this.loginForm.value.role=="Consultant")
      //  {
      //     this.route.navigate (["homeConsultant"]);
      //    }
      //    if (this.loginForm.value.role=="Client")
      //    {
      //     this.route.navigate (["homeClient"]);
      //   }
    },
    (error) => {
      console.error('Error during form data submission:', error);
    
      if (error.status === 401) {
        this.message.add({ severity: 'error', summary: 'Error', detail: 'username or password not found ' });
        console.error('Bad Request Error:', error.error);
    
        if (error.error && error.error.message) {
          console.error('Server Error Message:', error.error.message);
        }
        else {
          console.error('Unhandled Error:', error);
      } 
      } else if(error.status==404) {
        this.message.add({ severity: 'error', summary: 'Error', detail: 'username already used' });
        
      }
    }
    );
    


//   console.log(this.loginForm.value);
//   console.log(this.loginForm.value.selectedRole)
// if (this.loginForm.value.selectedRole=="Administrator")
// {
//   this.route.navigate (["homeAdmin"]);
// }
// if (this.loginForm.value.selectedRole=="Consultant")
// {
//   this.route.navigate (["homeConsultant"]);
// }
// if (this.loginForm.value.selectedRole=="Client")
// {
//   this.route.navigate (["homeClient"]);
// }

}
ngOnInit() {
}

}



