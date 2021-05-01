import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Actividades } from 'src/app/_models/actividades/actividades';
import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
export interface Convenio {
  id: number;
  nombre: string;
  porcentajeDescuento : number;
  activo: boolean;
}

@Component({
  selector: 'app-add-convenio',
  templateUrl: './add-convenio.component.html',
  styleUrls: ['./add-convenio.component.css']
})


export class AddConvenioComponent  {

  ConvenioDTO:Convenio = {
    id: null,
    nombre: null,
    porcentajeDescuento : null,
    activo: null
  }

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  selected = 'option1';
  nomFormControl = new FormControl('', [
    Validators.required,
  ]);
  porFormControl = new FormControl('', [
    Validators.required,
    Validators.max(100),
    Validators.min(0)
  ]);
  postConvenios(){
    var op = false;
    if(this.selected == 'option1'){
      op=true;
    }
    if(this.nomFormControl.valid && this.porFormControl.valid ) {
      this.httpClient.post('http://159.65.222.132:804/api/Convenios',{id: 0, nombre: this.ConvenioDTO.nombre,porcentajeDescuento: this.ConvenioDTO.porcentajeDescuento, activo: op} ).subscribe(data => {
      
      });
  
      this.dialog.closeAll();
    }
  }
}
