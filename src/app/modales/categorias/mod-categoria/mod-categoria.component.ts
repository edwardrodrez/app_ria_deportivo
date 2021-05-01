import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  id: number,
  nombre: string,
  activo: true,
  precios: [
    {
      id: number,
      valor: number,
      fechaVigencia: Date
    }
  ]
}

export interface PeriodicElement2 {

  id: number,
  valor: number,
  fechaVigencia: Date,
  categoria: {
    id: number,
    nombre: string,
    activo: true,
    precios: [
      null
    ]
  }
}

@Component({
  selector: 'app-mod-categoria',
  templateUrl: './mod-categoria.component.html',
  styleUrls: ['./mod-categoria.component.css']
})
export class ModCategoriaComponent implements OnInit {

  ActividadesDTO:PeriodicElement = {
    id: null,
    nombre: null,
    activo: null,
    precios: [null]
  }

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  toppings = new FormControl();
  toppingList;

  ngOnInit(): void {
    if( this.data.activo==true){
     this.selected = 'option1';
    }
    else{
      this.selected = 'option2';

    }
    this.ActividadesDTO.nombre= this.data.nombre;
  }

  getPre(){
    this.httpClient.get<PeriodicElement2[]>('http://159.65.222.132:804/api/Precios').subscribe(data => {
     this.toppingList = data;
   });;
 }

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
    this.httpClient.put('http://159.65.222.132:804/api/Categorias/'+this.data.id,{id: this.data.id, nombre: this.ActividadesDTO.nombre, activo: op, precios: this.ActividadesDTO.precios} ).subscribe(data => {
      
    });

    this.dialog.closeAll();
  }
}
}
