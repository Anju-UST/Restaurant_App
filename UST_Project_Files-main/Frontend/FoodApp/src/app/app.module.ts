import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { KitchenstaffDashboardComponent } from './kitchenstaff-dashboard/kitchenstaff-dashboard.component';
import { CreateComponent } from './admin-dashboard/create/create.component';
import { ListComponent } from './admin-dashboard/list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddmenuComponent } from './admin-dashboard/addmenu/addmenu.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SpecificmenuComponent } from './admin-dashboard/specificmenu/specificmenu.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { UpdateComponent } from './admin-dashboard/update/update.component';
import { AddkitchenstaffComponent } from './admin-dashboard/addkitchenstaff/addkitchenstaff.component';
import { MenuupdateComponent } from './admin-dashboard/menuupdate/menuupdate.component';
import { AdminloginComponent } from './admin-dashboard/adminlogin/adminlogin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserpageComponent } from './user-dashboard/userpage/userpage.component';
import { RestaurantComponent } from './user-dashboard/restaurant/restaurant.component';
import { NavbaruserComponent } from './user-dashboard/navbaruser/navbaruser.component';
import { MenuuserComponent } from './user-dashboard/menuuser/menuuser.component';
import { BannerComponent } from './user-dashboard/banner/banner.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    KitchenstaffDashboardComponent,
    CreateComponent,
    ListComponent,
    NavbarComponent,
    AddmenuComponent,
    AboutComponent,
    FooterComponent,
    MenuComponent,
    SpecificmenuComponent,
    AddtocartComponent,
    UpdateComponent,
    AddkitchenstaffComponent,
    MenuupdateComponent,
    AdminloginComponent,
    UserpageComponent,
    RestaurantComponent,
    NavbaruserComponent,
    MenuuserComponent,
    BannerComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
