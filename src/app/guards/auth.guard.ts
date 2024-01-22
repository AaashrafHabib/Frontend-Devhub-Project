import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
export const authGuard: CanActivateFn = (route, state) => {
const service = inject(AuthService)
    if (service.IsLoggedIn()) {
        return true
    }else {
      const router = inject(Router);
     router.navigate(['login'])
      return false;
    };
  };
