import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { Restaurant } from 'src/app/modal/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  rest: Restaurant[]=[];
  menu:Menu[]=[];
  constructor(private restService:RestaurantService,private router: Router){}

  ngOnInit(): void {
    this.getProductall();
  }

  private getProductall(){
    this.restService.getRest().subscribe(data => {
      this.rest = data;
    });
  }


  deleteRestaurant(id: number){
    this.restService.deleteRest(id).subscribe( data => {
      console.log(data);
      this.getProductall();
    })
  }

  updateRest(id:number){
    this.router.navigate(['update', id]);
  }

  fetchSpecificRestaurantMenu(restname: string) {
    this.restService.getAllMenu().subscribe(data => {
      this.menu = data.filter(menuItem => menuItem.restname === restname);
      console.log(this.menu);
      this.router.navigate(['viewmenu', restname]);
    });
  }



}
