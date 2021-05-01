import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  id_Contrato: Number,
  usuarioGenero: string,
  fechaComienzo: Date,
  id_Persona: Number,
  id_convenio: Number,
  id_categoria: Number,
  id_medioDePago: Number,
  activo: boolean

}
  
export interface PeriodicElement2 {
  id: Number,
  primerNombre: string,
  segundoNombre: string,
  primerApellido: string,
  segundoApellido: string,
  fechaNacimiento: Date,
  documento: string,
  tipoDocumento: string,
  telefono: string,
  direccion: string,
  fechaVenceCarneSalud: Date,
}

export interface PeriodicElement3{
  id: Number,
  nombre: string,
  porcentajeDescuento: 0,
  activo: boolean
}

export interface PeriodicElement4{
  id: Number,
  nombre: string,
  activo: boolean,
  precios: [
    {
      id: Number,
      valor: Number,
      fechaVigencia: Date
    }
  ]
}


export interface PeriodicElement5{
  id: Number,
  nombre: string,
  activo: boolean
}

@Component({
  selector: 'app-add-contrato',
  templateUrl: './add-contrato.component.html',
  styleUrls: ['./add-contrato.component.css']
})
export class AddContratoComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ContraDTO: PeriodicElement ={
    id_Contrato: 0,
    usuarioGenero: null,
    fechaComienzo: null,
    id_Persona: null,
    id_convenio: null,
    id_categoria: null,
    id_medioDePago: null,
    activo: null
  };

  constructor(public dialog: MatDialog,private _formBuilder: FormBuilder,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getSocios();
    this.getConve()
    this.getCat()
    this.getMediosDePago()
  }
  selected = 'option1';

  favoriteSeason: PeriodicElement2;
  typesOfShoes: PeriodicElement2[];

  favoriteSeason2: PeriodicElement3;
  typesOfShoes2: PeriodicElement3[];

  
  favoriteSeason3: PeriodicElement4;
  typesOfShoes3: PeriodicElement4[];

  favoriteSeason4: PeriodicElement5;
  typesOfShoes4: PeriodicElement5[];

  getSocios(){
    this.httpClient.get<PeriodicElement2[]>('http://159.65.222.132:804/api/Personas').subscribe(data => {
     this.typesOfShoes = data

   });;
  }
  getConve(){
    this.httpClient.get<PeriodicElement3[]>('http://159.65.222.132:804/api/Convenios').subscribe(data => {
    this.typesOfShoes2 = data

  });;
  }
  getCat(){
    this.httpClient.get<PeriodicElement4[]>('http://159.65.222.132:804/api/Categorias').subscribe(data => {
    this.typesOfShoes3 = data

  });;
  }

  getMediosDePago(){
    this.httpClient.get<PeriodicElement4[]>('http://159.65.222.132:804/api/MediosDePago').subscribe(data => {
    this.typesOfShoes4 = data

  });;
  }

 date = new FormControl(new Date());

 selected2 = 'option1';

 postConvenios(){
   if(this.selected == "option1"){
    this.ContraDTO.usuarioGenero = "Hombre";
   }
   else{
    this.ContraDTO.usuarioGenero = "Mujer";
   }

   if(this.selected2 == "option1"){
    this.ContraDTO.activo = true;
   }
   else{
     this.ContraDTO.activo = false;
   }

   this.ContraDTO.id_Persona = this.favoriteSeason.id
   this.ContraDTO.id_convenio = this.favoriteSeason2.id
   this.ContraDTO.id_categoria = this.favoriteSeason3.id
   this.ContraDTO.id_medioDePago = this.favoriteSeason4.id
   this.ContraDTO.fechaComienzo = this.date.value;

   this.httpClient.post('http://159.65.222.132:804/api/Contratos', this.ContraDTO ).subscribe(data => {

  });
  this.dialog.closeAll();
  }

}
