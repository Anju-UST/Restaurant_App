import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../modal/login';
import { AuthenticateServiceService } from '../service/authenticate-service.service';
import { RouterServiceService } from '../service/router-service.service';
import { UserAuthService } from '../authservice/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  loginForm: FormGroup;
  submitMessage!: string;
  flag: boolean = false;
  usertype!: string;
  userid!: any;
  myid!: any;
  private isAuthenticated = false;

  constructor(
    private routerService: RouterServiceService,
    private authservice: AuthenticateServiceService,
    private route: Router,
    private userAuthService:UserAuthService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.isAuthenticated = !!localStorage.getItem('token');
    this.authservice.retrieveUserId();
  }

  onSubmit() {
    this.login.userName = this.loginForm.value.username;
    this.login.userPassword = this.loginForm.value.password;

    this.submitMessage = this.loginForm.value.username;

    this.authservice.getusers(this.login).subscribe(
      (data: any) => {
        this.authservice.setBearerToken(data['token']);
        if (data != null) {
          localStorage.setItem('token', this.submitMessage);
          localStorage.setItem('username',this.login.userName);
          this.flag = true;
          this.setAuthenticated(true);
          this.userid = data.user.userid;
          localStorage.setItem('myuseridd', this.userid);

          this.userAuthService.setRoles(data.user.role);
          this.userAuthService.setToken(data.jwtToken);

          const role = data.user.role[0].roleName;
          if(role==='User'){
            this.route.navigate(['/user']);
          }
          else{
            alert('You are not authorized to Login');
          }
        }
      },
      (error) => {
        console.log('error');
        alert('You have entered incorrect username or password!');
      }
    );
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }

  setAuthenticated(status: boolean): void {
    this.isAuthenticated = status;
  }

  logout() {
    this.setAuthenticated(false);
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  idnum = localStorage.getItem('myuseridd');

  // sendidtoservice(){
  //     return this.authservice.retrieveUserId(this.idnum);
  // }

  
}
