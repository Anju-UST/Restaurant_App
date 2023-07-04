import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../modal/menu';
import { Restaurant } from '../modal/restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  menu: Menu[] = [];
  restaurant!: String;
  constructor(private restService:RestaurantService,private router: Router){}

  ngOnInit(): void {
    this.fetchRestaurantMenu();
  }

  fetchRestaurantMenu(){
      this.restService.getAllMenu().subscribe(data => {
        this.menu = data;
      });
  }

  deleteRestaurant(id: number){
    this.restService.deleteMenu(id).subscribe( data => {
      console.log(data);
      this.fetchRestaurantMenu();
    })
  }

  updateRest(id:number){
    this.router.navigate(['menuupdate', id]);
  }
 
  

  // filterMenu(){
  //   const restaurantNames = this.menu.map((menuItem) => menuItem.restname);
  //   console.log(restaurantNames);
    
  //   if (restaurantNames.length > 0) {
  //     this.menu.forEach((restname: string) => {
  //       this.restService.getMenuByName(restname).subscribe(data => {
  //         this.menu = data;
  //       });
  //     });
  //   } 
  // }
  
  
}
