import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { Restaurant } from 'src/app/modal/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';



@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {

  addMenuGroup!: FormGroup;
  menudet:Menu=new Menu();
  menu: Menu[]=[];
  rname!: string;
  restname: Restaurant[]=[];

  constructor(private restService:RestaurantService,
    private router: Router,private formBuilder: FormBuilder){}

    ngOnInit():void{
      this.getProductall();
      this.addMenuGroup = this.formBuilder.group({
        itemName: ['', Validators.required],
        price: ['', Validators.required],
        itemPic: [''],
        restaurant: ['', Validators.required]
      });
    }

    private getProductall(){
      this.restService.getRest().subscribe(data => {
        this.restname = data;
      });
    }

    onSubmit(){
      this.saveProduct();
       console.log(this.menu);
    }

    saveProduct(){
      const selectedRestaurant = this.addMenuGroup.get('restaurant')?.value;
      this.menudet.restname = selectedRestaurant;
      this.restService.saveMenu(this.menudet).subscribe((data)=>{
        console.log(data);
       this.getMenuList();
      },
      
        (error)=>console.log(error)
      );
    }
    getMenuList(){
      this.router.navigate(['/menu']);
    }

}
