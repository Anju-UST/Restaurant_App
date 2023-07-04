import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddkitchenstaffComponent } from './admin-dashboard/addkitchenstaff/addkitchenstaff.component';
import { AddmenuComponent } from './admin-dashboard/addmenu/addmenu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './admin-dashboard/adminlogin/adminlogin.component';
import { CreateComponent } from './admin-dashboard/create/create.component';
import { ListComponent } from './admin-dashboard/list/list.component';
import { MenuupdateComponent } from './admin-dashboard/menuupdate/menuupdate.component';
import { SpecificmenuComponent } from './admin-dashboard/specificmenu/specificmenu.component';
import { UpdateComponent } from './admin-dashboard/update/update.component';
import { KitchenstaffDashboardComponent } from './kitchenstaff-dashboard/kitchenstaff-dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { MenuuserComponent } from './user-dashboard/menuuser/menuuser.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserpageComponent } from './user-dashboard/userpage/userpage.component';
import { AuthGuard } from './_auth/auth.guard.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';



const routes: Routes = [
  {path:'',component:UserDashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'user', component: UserpageComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'kitchen', component: KitchenstaffDashboardComponent,canActivate:[AuthGuard], data:{roles:['KitchenStaff']}},
  {path:'create',component:CreateComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'product',component:ListComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'about',component:AboutComponent},
  {path:'addmenu',component:AddmenuComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'menu',component:MenuComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'viewmenu/:restname',component:SpecificmenuComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'addtocart',component:AddtocartComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'update/:id',component:UpdateComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'addkitchenstaff',component:AddkitchenstaffComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:`menuupdate/:mid`,component:MenuupdateComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:`admin/login`,component:AdminloginComponent},
  {path:`viewmenuuser/:restname`,component:MenuuserComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'forbidden',component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
