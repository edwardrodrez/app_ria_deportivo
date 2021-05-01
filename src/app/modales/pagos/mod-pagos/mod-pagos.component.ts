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
  categoria: PeriodicElement2
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
  selector: 'app-mod-pagos',
  templateUrl: './mod-pagos.component.html',
  styleUrls: ['./mod-pagos.component.css']
})
export class ModPagosComponent implements OnInit {

  cat;
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
    Validators.min(0)
  ]);

  favoriteSeason: PeriodicElement2;
  typesOfShoes: PeriodicElement2[];

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getActividades();
    this.getActividad();
  }

  getActividades(){
     this.httpClient.get<PeriodicElement2[]>('http://159.65.222.132:804/api/Categorias').subscribe(data => {
      this.typesOfShoes = data
    });;
  }

  getActividad(){
    return this.httpClient.get<PeriodicElement>('http://159.65.222.132:804/api/Precios/'+this.data.id).subscribe(data => {
      this.pagosDTO = data;
    });
  }

  putConvenios(){
    if(this.valFormControl.valid && this.date.valid  ) {
    this.httpClient.put('http://159.65.222.132:804/api/Precios/'+this.data.id,{id: this.data.id, valor: this.pagosDTO.valor, fechaVigencia: this.date.value,categoria: this.favoriteSeason} ).subscribe(data => {
   
    });
    this.dialog.closeAll();

  }
  }

}
