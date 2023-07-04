import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Login } from '../modal/login';
import { Signup } from '../modal/signup';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {

  private authenticated: boolean = false;
  private tokenStr!: string;
  userid!: any;

  constructor(private httpClient: HttpClient, private route: Router) {
    this.checkAuthentication();
  }

  addUser(signup: Signup): Observable<Signup> {
    return this.httpClient.post<Signup>('http://localhost:8088/api/auth/registerNewUser', signup);
  }

  addKitchen(signup: Signup): Observable<Signup> {
    return this.httpClient.post<Signup>(`http://localhost:8088/api/auth/registerNewKitchenStaff`, signup);
  }

  getusers(userr: Login) {
    console.log("GET USER");
    console.log(userr.userName);
    console.log(userr.userPassword);
    this.authenticated = true;
    return this.httpClient.post<any>(`http://localhost:8088/api/auth/authenticate`, userr, { headers: new HttpHeaders().set('responseType', 'text') }).pipe(
      map(
        userData => {
          localStorage.setItem('username', userr.userName);
          this.tokenStr = userData.token;
          console.log("Token string: " + this.tokenStr);
          localStorage.setItem('token', this.tokenStr);
          const id = userData.userid;
          console.log("my id is " + id);
          localStorage.setItem('myuseridd', id);
          this.userid = id;
          return userData;
        }
      )
    );
  }

  getUserByUsername(username: string) {
    return this.httpClient.get<any>(`http://localhost:8088/api/user/details/${username}`);
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  setAuthenticated(status: boolean): void {
    this.authenticated = status;
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem('token');
    localStorage.removeItem('myuseridd');
    this.route.navigate(['/user']);
  }

  setBearerToken(token: string) {
    localStorage.setItem('token', token);
  }

  private checkAuthentication() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('myuseridd');
    this.authenticated = !!token && !!userId;
    this.userid = userId;
  }

  retrieveUserId() {
    return this.userid;
  }
}
