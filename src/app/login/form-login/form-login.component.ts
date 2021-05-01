import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/_services/usuarios.service';
import { Registro } from 'src/app/_models/ingreso/registro';
import { FormsModule }   from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
 
 
  registroDTO:Registro = {
    email:      null,
    password:   null
  }


  constructor(
    public dialog: MatDialog,private router: Router,
    private oUsuariosService:UsuariosService) { }



  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  login(){
    if(this.emailFormControl.valid && this.passFormControl.valid  ) {
        this.oUsuariosService.login(this.registroDTO);
        this.dialog.closeAll();
    
    }

  }
}
