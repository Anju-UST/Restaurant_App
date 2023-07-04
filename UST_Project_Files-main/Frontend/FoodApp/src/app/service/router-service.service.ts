import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RouterServiceService {
 
  constructor(private router:Router) { }

  tologin() {
    this.router.navigate(['/login']);
  }

  tohome() {
    this.router.navigate(['/user']);
  }
  touser() {
    this.router.navigate(['/user']);
  }
  toadmin(){
    this.router.navigate(['/product']);
  }
  tokitchen(){
    this.router.navigate(['/kitchen']);
  }

}
