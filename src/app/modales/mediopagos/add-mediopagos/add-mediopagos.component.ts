import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Actividades } from 'src/app/_models/actividades/actividades';
import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-mediopagos',
  templateUrl: './add-mediopagos.component.html',
  styleUrls: ['./add-mediopagos.component.css']
})
export class AddMediopagosComponent{

  
  ActividadesDTO:Actividades = {
    id:      null,
    nombre:   null,
    activo:   null
  }
  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  selected = 'option1';
  nomFormControl = new FormControl('', [
    Validators.required,
  ]);
  postActividades(){
    var op = false;
    if(this.selected == 'option1'){
      op=true;
    }
    if(this.nomFormControl.valid ) {
      this.httpClient.post('http://159.65.222.132:804/api/MediosDePago',{id: 0, nombre: this.ActividadesDTO.nombre, activo: op} ).subscribe(data => {
      
      });
  
      this.dialog.closeAll();
  
    }
  }
}
