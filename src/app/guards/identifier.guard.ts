import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const identifierGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService)
  const payload = {
    access_token : localStorage.getItem('access_token')
    
    } ; 
service.decode(payload).subscribe( 
(response)=> { 
if (response.role=='Client') { 

  return false  ; 
}
else if (response.role=="Administrator") {
  return true ;  
} 
else return false ; 
} 





) 
return false ; 




  };
