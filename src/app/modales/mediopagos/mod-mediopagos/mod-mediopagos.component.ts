import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Actividades } from 'src/app/_models/actividades/actividades';
import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mod-mediopagos',
  templateUrl: './mod-mediopagos.component.html',
  styleUrls: ['./mod-mediopagos.component.css']
})
export class ModMediopagosComponent implements OnInit {

  ActividadesDTO:Actividades = {
    id:      null,
    nombre:   null,
    activo:   null
  }
  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if( this.data.activo==true){
     this.selected = 'option1';
    }
    else{
      this.selected = 'option2';

    }
    this.ActividadesDTO.nombre= this.data.nombre;
  }
  selected;
  nomFormControl = new FormControl('', [
    Validators.required,
  ]);
  putActividades(){
    var op = false;
    if(this.selected == 'option1'){
      op=true;
    }
    if(this.nomFormControl.valid ) {
      this.httpClient.put('http://159.65.222.132:804/api/MediosDePago/'+this.data.id,{id: this.data.id, nombre: this.ActividadesDTO.nombre, activo: op} ).subscribe(data => {
      
      });
  
      this.dialog.closeAll();

    }
  }
}
