import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
export interface Convenio {
  id: number;
  nombre: string;
  porcentajeDescuento : number,
  activo: boolean;
}

@Component({
  selector: 'app-mod-convenio',
  templateUrl: './mod-convenio.component.html',
  styleUrls: ['./mod-convenio.component.css']
})
export class ModConvenioComponent implements OnInit {

  ConvenioDTO:Convenio = {
    id: null,
    nombre: null,
    porcentajeDescuento : null,
    activo: null
  }
  

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if( this.data.activo==true){
     this.selected = 'option1';
    }
    else{
      this.selected = 'option2';

    }
    this.ConvenioDTO.nombre= this.data.nombre;
    this.ConvenioDTO.porcentajeDescuento= this.data.porcentajeDescuento;
  }

  selected;
  nomFormControl = new FormControl('', [
    Validators.required,
  ]);
  porFormControl = new FormControl('', [
    Validators.required,
    Validators.max(100),
    Validators.min(0)
  ]);
  putConvenios(){
    var op = false;
    if(this.selected == 'option1'){
      op=true;
    }

    if(this.nomFormControl.valid && this.porFormControl.valid ) {
      this.httpClient.put('http://159.65.222.132:804/api/Convenios/'+this.data.id,{id: this.data.id, nombre: this.ConvenioDTO.nombre,porcentajeDescuento: this.ConvenioDTO.porcentajeDescuento, activo: op} ).subscribe(data => {
      
      });
  
      this.dialog.closeAll();
    } 
  }
  
}
