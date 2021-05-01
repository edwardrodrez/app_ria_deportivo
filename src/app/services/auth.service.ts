import { Injectable } from '@angular/core';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://159.65.222.132:804/api/Account​';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private http: HttpClient,private router: Router) { }

  register(user: UserI) {
    return this.http.post("http://159.65.222.132:804/api/Account/register",
      user).subscribe((resp: any) => {
     
        this.router.navigate(['/']);
        localStorage.setItem('auth_token', resp.token);
        console.log(resp.token);

        });
  }

  login(user: UserI) {
    return this.http.post("http://159.65.222.132:804/api/Account/login",
      user).subscribe((resp: any) => {
     
        this.router.navigate(['/']);
        localStorage.setItem('auth_token', resp.token);
        console.log(resp.token);

        });
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }


  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
