import { Injectable } from '@angular/core';
import { Menu } from '../modal/menu';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class SharedmenuserviceService {

  newmenu: Menu[] = [];

  addToMenu(menuItem: Menu) {
    this.newmenu.push(menuItem);
  }

  getMenu() {
    return this.newmenu;
  }

  clearMenu() {
    this.newmenu.pop();
  }

  private logg!: LoginComponent;


  // getuserid(){
  //   return this.logg.retrieveUserId();
  // }

}
