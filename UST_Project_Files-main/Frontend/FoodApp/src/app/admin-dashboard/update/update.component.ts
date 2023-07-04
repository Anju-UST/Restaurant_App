import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  restId: number = 0;
  food: any;

  constructor(private restService: RestaurantService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.restId = this.route.snapshot.params['id'];
    this.restService.getRestById(this.restId).subscribe(
      (food) => {
        this.food = food;
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }

  onSubmit(){
    this.restService.saveUpdate(this.food).subscribe( data =>{
      this.goToProductList();
    }
    , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/product']);
  }

}
