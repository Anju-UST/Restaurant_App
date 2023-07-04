import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { Restaurant } from 'src/app/modal/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-specificmenu',
  templateUrl: './specificmenu.component.html',
  styleUrls: ['./specificmenu.component.css']
})
export class SpecificmenuComponent implements OnInit {
  menu: Menu[] = [];
rest:Restaurant[]=[];
restn:string='';
restname:string = '';
  constructor(private restService: RestaurantService, private router: Router,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
   this.restn=this.route.snapshot.params['restname'];
    this.restname = this.restn;
    this.fetchSpecificRestaurantMenu(this.restname);
  }

  fetchSpecificRestaurantMenu(restname: string): void {
    this.restService.getAllMenu().subscribe(data => {
      this.menu = data.filter(menuItem => menuItem.restname === restname);
      console.log(this.menu);
    });
  }

  deleteRestaurant(id: number){
    this.restService.deleteRest(id).subscribe( data => {
      console.log(data);
      this.fetchSpecificRestaurantMenu(this.restname);
    })
  }

  updateRest(id:number){
    this.router.navigate(['menuupdate', id]);
  }
}

