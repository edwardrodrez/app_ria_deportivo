import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Validators, FormControl } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
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

export interface PeriodicElement2 {
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

@Component({
  selector: 'app-add-pagos',
  templateUrl: './add-pagos.component.html',
  styleUrls: ['./add-pagos.component.css']
})
export class AddPagosComponent implements OnInit {


  pagosDTO:PeriodicElement = {
    id: null,
    valor: null,
    fechaVigencia: null,
    categoria: null,
  }
  date = new FormControl(new Date(), [
    Validators.required,
  ]);
  valFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
  ]);

  favoriteSeason: PeriodicElement2;
  typesOfShoes: PeriodicElement2[];

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getActividades();

  }

  getActividades(){
     this.httpClient.get<PeriodicElement2[]>('http://159.65.222.132:804/api/Categorias').subscribe(data => {
      this.typesOfShoes = data
    });;
  }


  postConvenios(){
    if(this.valFormControl.valid && this.date.valid  ) {
    this.httpClient.post('http://159.65.222.132:804/api/Precios',{id: 0, valor: this.pagosDTO.valor, fechaVigencia: this.date.value,categoria: this.favoriteSeason} ).subscribe(data => {
   
    });
    this.dialog.closeAll();

  }
  }

}
