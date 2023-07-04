import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { Restaurant } from 'src/app/modal/restaurant';
import { AuthenticateServiceService } from 'src/app/service/authenticate-service.service';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  rest: Restaurant[]=[];
  menu:Menu[]=[];
  restn: any;
 
  restname: any;




  // restData:any;
  // filteredData:any[] | undefined;
  // searchQuery!: string;
  constructor(private restService:RestaurantService,
   private router: Router,
    private route:ActivatedRoute,private service:AuthenticateServiceService){}
  ngOnInit(): void {

    this.getProductall();
   
    this.restn=this.route.snapshot.params['restname'];
    this.restname = this.restn;
    this.fetchSpecificRestaurantMenu(this.restname);
  }

  fetchSpecificRestaurantMenu(restname: string): void {
    this.restService.getAllMenu().subscribe(data => {
      this.menu = data.filter(menuItem => menuItem.restname === restname);
      console.log(this.menu);
      this.router.navigate(['viewmenuuser', restname]);

    });
  }

  checkLogin(restaurant: Restaurant):void{
    if(!this.service.isAuthenticated()){
      this.router.navigate(['/login']);
    }
    else{
      this.fetchSpecificRestaurantMenu(restaurant.restName);
    }
  }
  
  private getProductall(){
    this.restService.getRest().subscribe(data => {
      this.rest = data;
      console.log(this.rest);
    });
  }

 
}
