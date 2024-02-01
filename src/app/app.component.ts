import { Component} from '@angular/core'
import { Router, Event as RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prjt';
  showMenubar:boolean=true; 
  showfooter:boolean=true; 
  showheader:boolean=true ; 
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      


      const isLoginRoute = event.urlAfterRedirects.startsWith('/login')
      
  

    this.showMenubar = !isLoginRoute;
  
    });

    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      


      const isLoginRoute = event.urlAfterRedirects.startsWith('/login')
    
    

    this.showfooter = isLoginRoute;
  
    });

    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      


      const isLoginRoute = event.urlAfterRedirects.startsWith('/login')
    
    

    this.showheader = isLoginRoute;
  
    });



    
    }
}
