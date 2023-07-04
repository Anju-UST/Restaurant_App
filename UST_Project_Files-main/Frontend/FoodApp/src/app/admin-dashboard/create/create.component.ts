import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/modal/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  rest:Restaurant=new Restaurant();
  constructor(private restService:RestaurantService,
    private router: Router){}

    ngOnInit():void{}
    
    onSubmit(){
      this.saveProduct();
       console.log(this.rest);
    }
    saveProduct(){
      this.restService.saveProduct(this.rest).subscribe((data)=>{
        console.log(data);
       this.getRestList();
      },
      
        (error)=>console.log(error)
      );
    }
    getRestList(){
      this.router.navigate(['/product']);
    }

}
