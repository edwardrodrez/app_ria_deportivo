import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MensajeComponent } from './mensaje/mensaje.component';
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar,private router: Router) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, "OK", {
      duration: 10000,
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {

          errorMessage = `${error.error.message}`;
        } else {

          errorMessage =  `${error.error}`;
        }


        if( errorMessage == '[object ProgressEvent]'){
          errorMessage = "Error inesperado intentelo mas tarde"
        }
        if( errorMessage == 'null'){
          this.router.navigate(['/']);
          errorMessage = "No tiene permisos para acceder a esta ruta"
        }

        this.openSnackBar(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}