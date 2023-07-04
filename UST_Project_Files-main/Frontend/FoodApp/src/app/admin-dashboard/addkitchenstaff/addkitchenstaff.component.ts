import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Kitchenstaff } from 'src/app/modal/kitchenstaff';
import { Restaurant } from 'src/app/modal/restaurant';
import { Signup } from 'src/app/modal/signup';
import { AuthenticateServiceService } from 'src/app/service/authenticate-service.service';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-addkitchenstaff',
  templateUrl: './addkitchenstaff.component.html',
  styleUrls: ['./addkitchenstaff.component.css']
})
export class AddkitchenstaffComponent implements OnInit{

  addKitchenGroup!:FormGroup;
  kitchen: Kitchenstaff = new Kitchenstaff();
  signup:Signup = new Signup();
  rest:Restaurant[] = [];

  constructor(private restService:RestaurantService,
    private router: Router,private formBuilder: FormBuilder,
    private authser:AuthenticateServiceService){}

  ngOnInit(): void {
    this.getProductall();
    this.addKitchenGroup = this.formBuilder.group({
      ksusername: ['', Validators.required],
      kspassword: ['', Validators.required],
      restaurant: ['', Validators.required]
    });
  }

    private getProductall(){
      this.restService.getRest().subscribe(data => {
        this.rest = data;
        console.log(this.rest);
      });
    }

    onSubmit(){
      this.saveStaff();
    }

    saveStaff() {
      this.signup.userFirstName = this.addKitchenGroup.get('restaurant')?.value;
      this.signup.userName = this.addKitchenGroup.get('ksusername')?.value;
      this.signup.userPassword = this.addKitchenGroup.get('kspassword')?.value;

      this.authser.addKitchen(this.signup).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/product']);
        },
        (error) => console.log(error)
      );
    }

}
