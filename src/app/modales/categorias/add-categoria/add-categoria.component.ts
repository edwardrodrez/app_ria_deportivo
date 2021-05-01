import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Actividades } from 'src/app/_models/actividades/actividades';
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
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  ActividadesDTO:PeriodicElement = {
    id: null,
    nombre: null,
    activo: null,
    precios: [null]
  }

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getPre();

  }

  toppings = new FormControl();
  toppingList;

  selected = 'option1';
  nomFormControl = new FormControl('', [
    Validators.required,
  ]);

  getPre(){
    this.httpClient.get<PeriodicElement2[]>('http://159.65.222.132:804/api/Precios').subscribe(data => {
     this.toppingList = data;
   });;
 }

  postActividades(){
    var op = false;
    if(this.selected == 'option1'){
      op=true;
    }
    if(this.nomFormControl.valid ) {
      this.httpClient.post('http://159.65.222.132:804/api/Categorias',{id: 0, nombre: this.ActividadesDTO.nombre, activo: op, precios: this.ActividadesDTO.precios} ).subscribe(data => {
      
      });
  
      this.dialog.closeAll();
    }
  }



  
  
  
  


}
