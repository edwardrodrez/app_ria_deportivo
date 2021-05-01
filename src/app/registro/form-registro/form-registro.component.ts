import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/_services/usuarios.service';
import { Registro } from 'src/app/_models/ingreso/registro';
import { FormsModule }   from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})


export class FormRegistroComponent implements OnInit {

  cargando = false;

  registroDTO:Registro = {
    email:      null,
    password:   null
  }

  passConfirm:string = "";

  variant:string = "error"; // error warning success
  showTopToast = false;
  msj:string = "";
  constructor(
    public dialog: MatDialog,private router: Router,
    private oUsuariosService:UsuariosService,
    private dialogRef:MatDialogRef<MatDialog>)
    { }

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

  registro(){
  if(this.emailFormControl.valid && this.passFormControl.valid  ) {
    this.oUsuariosService.register(this.registroDTO)  
    this.dialog.closeAll();

  }
}
}
