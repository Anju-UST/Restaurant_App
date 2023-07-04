import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../modal/signup';
import { AuthenticateServiceService } from '../service/authenticate-service.service';
import { RouterServiceService } from '../service/router-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  

  signup: Signup = new Signup();

  signUpArray: Array<Signup> = [];

  signupForm: FormGroup;
  

  constructor(private routerService: RouterServiceService, private authenticateService: AuthenticateServiceService, public formBuilder: FormBuilder) {
    this.signupForm = new FormGroup({
      userName: new FormControl(),
      userFirstName: new FormControl(),
      userLastName: new FormControl(),
      userPassword: new FormControl(),
      userAddress: new FormControl()
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('key') != null) {
      // this.routerService.tohome();  
    }
    else {
      console.log("hi")
      this.signupForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        userFirstName: new FormControl('', Validators.required),
        userLastName: new FormControl('', Validators.required),
        userPassword: new FormControl('', Validators.required),
        userAddress: new FormControl('', Validators.required),
      });
    }
  }

  get f() 
  { 
    return this.signupForm.controls; 
  }

  onSubmit(){
    console.log("Hi");

    this.signup.userPassword = this.signupForm.value.userPassword;
    console.log("password== " + this.signupForm.value.userPassword)
    this.signup.userName = this.signupForm.value.userName;
    console.log("username== " + this.signupForm.value.userName)
    this.signup.userFirstName = this.signupForm.value.userFirstName;
    console.log("name== " + this.signupForm.value.userFirstName)
    this.signup.userAddress = this.signupForm.value.userAddress;
    console.log("address== " + this.signupForm.value.userAddress)
    this.signup.userLastName = this.signupForm.value.userLastName;
    console.log("Lastname== " + this.signupForm.value.userLastName)

    this.signUpArray.push(this.signup);
    this.authenticateService.addUser(this.signup).subscribe((data) => {
      // console.log("inside regsiter angular")
      console.log(data)
      this.routerService.tologin();
      alert("Yeah! Register Succesfull " + data.userName);

    },
      (error: any) => {
        console.log(error);
        alert("Oops! Already registered try Login Instead");
      });
  }

}
