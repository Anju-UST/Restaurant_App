import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateServiceService } from '../service/authenticate-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private service:AuthenticateServiceService,private router:Router){}
  
  isLoggedIn = this.service.isAuthenticated();
 
  toggleLogin() {
    if (this.isLoggedIn) {
      // Perform logout logic if needed
      this.isLoggedIn = false;
      this.router.navigate(['/user']);
    } else {
      this.isLoggedIn = true;
      this.router.navigate(['/login']);
    }
  }

}
