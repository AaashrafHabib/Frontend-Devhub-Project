import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('/login')) {
      return next.handle(request);
    } else {
      return new Observable<HttpEvent<any>>(observer => {
        const payload = {
          access_token : localStorage.getItem('access_token')
          
          } ; 
        this.authService.decode(payload).subscribe(

          (decodedToken) => {
            console.log("chedi11111111");
            console.log("chedi");
            console.log(decodedToken);

            if (decodedToken && this.authService.isTokenValid(decodedToken.exp)) {
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${decodedToken.access_token}`,
                },
              });

              next.handle(request).subscribe(
                event => observer.next(event),
                error => observer.error(error),
                () => observer.complete()
              );
            } else {
              console.log('Token is not valid, navigating to login.');
              this.router.navigate(['/login']);
              observer.error('Token not valid');
            }
          },
          (error) => {
            console.error('Error decoding token:', error);
            this.router.navigate(['/login']);
            observer.error('Error decoding token');
          }
        );
      })
    }
  }
}

