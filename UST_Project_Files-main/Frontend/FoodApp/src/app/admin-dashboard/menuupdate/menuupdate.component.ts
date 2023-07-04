import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { Restaurant } from 'src/app/modal/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-menuupdate',
  templateUrl: './menuupdate.component.html',
  styleUrls: ['./menuupdate.component.css']
})
export class MenuupdateComponent {

  menuId: number = 0;
  food!: Menu;
  rest:Restaurant[] = [];
  updateMenuGroup = FormGroup;
  selectedRestaurant: string | undefined;

  constructor(private restService: RestaurantService, private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.getProductall();
      this.menuId = this.route.snapshot.params['mid'];
      console.log(this.menuId);
      this.restService.getMenuById(this.menuId).subscribe(
        (food:Menu) => {
          this.food = food;
          console.log(this.food);
        },
        (error) => {
          console.log('Error retrieving menu:', error);
        }
      );
    }
  
    private getProductall(){
      this.restService.getRest().subscribe(data => {
        this.rest = data;
      });
    }

    onSubmit(){
      // this.food.restname = this.selectedRestaurant;
      this.restService.updateMenu(this.menuId,this.food).subscribe( data =>{
        this.goToProductList();
      }
      , error => console.log(error));
    }
  
    goToProductList(){
      this.router.navigate(['/menu']);
    }

}
