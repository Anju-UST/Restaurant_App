import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/authservice/user-auth.service';
import { Login } from 'src/app/modal/login';
import { AuthenticateServiceService } from 'src/app/service/authenticate-service.service';
import { RouterServiceService } from 'src/app/service/router-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  
  login:Login=new Login();
  adminForm!: FormGroup;
  submitMessage!: string;
  flag: boolean = false;
  usertype!: string;

  constructor(private routerService: RouterServiceService, 
    private authservice: AuthenticateServiceService,private route:Router,
    private userAuthService: UserAuthService) {

    this.adminForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){

    console.log("hi from loginsubmit");
    this.login.userName = this.adminForm.value.username;
    this.login.userPassword = this.adminForm.value.password;

    this.submitMessage = this.adminForm.value.username;

    console.log("Login Submit: " + this.adminForm.value);

    this.authservice.getusers(this.login).subscribe((data) => {
      this.authservice.setBearerToken(data['token']);
      
      console.log(data);

      if (data != null) {
        localStorage.setItem("key", this.submitMessage);
        this.flag = true;
        
        this.userAuthService.setRoles(data.user.role);
        this.userAuthService.setToken(data.jwtToken);

          const role = data.user.role[0].roleName;
          if(role==='Admin'){
            this.route.navigate(['/product']);
          }
          else{
            alert('You are not authorized to Login');
          }
        
      }
    },
    error => {
      console.log("error");
      alert('You have entered incorrect Username or Password!');
    });
  }

    
  }


