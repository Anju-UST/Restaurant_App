import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
