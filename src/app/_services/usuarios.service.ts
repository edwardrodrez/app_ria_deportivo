import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SessionModule } from '../_models/session/session.module';
import { Registro } from '../_models/ingreso/registro';
import { Login } from '../_models/ingreso/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Actividades } from '../_models/actividades/actividades';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  prefigo:string = "Account";

  constructor(
    private router: Router,
    private httpClient: HttpClient
    ) { }

  
  register(data:Registro){
    return this.httpClient.post<any>(environment.URLAPI + this.prefigo + "/register", data , this.getheaders()).subscribe((resp: any) => {
     
      this.router.navigate(['/']);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('roles', resp.roles);

      });
  }
  
  login(data:Login){    
    return this.httpClient.post<any>(environment.URLAPI + this.prefigo + "/login", data , this.getheaders()).subscribe((resp: any) => {
     
      this.router.navigate(['/']);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('roles', resp.roles);


      });
  }

  isAdmin(){
    let session = localStorage.getItem("SessionSeguros");
    try {
      let s:SessionModule = JSON.parse(session);
      console.log(s);
      
      return s != null && s.role == 'ADMIN';
    } catch (error) {
      return false;
    }

  }

  setSession(session:SessionModule){
    localStorage.setItem("SessionSeguros",JSON.stringify(session));
  }
  
  getSession():SessionModule{
    let session = localStorage.getItem("SessionSeguros");
    try {
      return JSON.parse(session);
    } catch (error) {
      return null;
    }
  }

  removeSession(){
    localStorage.removeItem("SessionSeguros")
  }

  /**
   * Genera el headers de los riquest
   */
  getheaders(){
    return {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
      } else {
          console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
      }
      return throwError(
          {
              code: error.status,
              body: error.error
          }
      );
  }


}