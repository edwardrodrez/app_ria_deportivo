import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  
  id: number,
  primerNombre: string,
  segundoNombre: string,
  primerApellido: string,
  segundoApellido: string,
  fechaNacimiento: Date,
  documento: string,
  tipoDocumento: string,
  telefono: string,
  direccion: string,
  fechaVenceCarneSalud:Date,
  prestadorDeSalud: {
    id: number,
    nombre: string,
    activo: true
  }

}
export interface PeriodicElement2 {
 
  id: number,
  nombre: string,
  activo: true
}

@Component({
  selector: 'app-mod-usuario',
  templateUrl: './mod-usuario.component.html',
  styleUrls: ['./mod-usuario.component.css']
})
export class ModUsuarioComponent implements OnInit {


  PresDeSaludDTO:PeriodicElement = {
    id: null,
    primerNombre: null,
    segundoNombre: null,
    primerApellido: null,
    segundoApellido: null,
    fechaNacimiento: null,
    documento: null,
    tipoDocumento: null,
    telefono: null,
    direccion: null,
    fechaVenceCarneSalud:null,
    prestadorDeSalud: null
  }

  prestadorDeSalud2;

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getActividades();
    this.getusu();
  }
  date = new FormControl(new Date(), [
    Validators.required,
  ]);
  date2 = new FormControl(new Date(), [
    Validators.required,
  ]);
  favoriteSeason: PeriodicElement2;
  typesOfShoes: PeriodicElement2[] ;
  primNFormControl = new FormControl('', [
    Validators.required,
  ]);
  segNFormControl = new FormControl('', [
    Validators.required,
  ]);
  primAFormControl = new FormControl('', [
    Validators.required,
  ]);

  segAFormControl = new FormControl('', [
    Validators.required,
  ]);

  docFormControl = new FormControl('', [
    Validators.required,
  ]);

  tipoFormControl = new FormControl('', [
    Validators.required,
  ]);

  telFormControl = new FormControl('', [
    Validators.required,
  ]);
  dirFormControl = new FormControl('', [
    Validators.required,
  ]);

  getActividades(){
    this.httpClient.get<PeriodicElement2[]>('http://159.65.222.132:804/api/PrestadoresDeSalud').subscribe(data => {
     this.typesOfShoes = data

   });;
 }

 getusu(){
  this.httpClient.get<PeriodicElement>('http://159.65.222.132:804/api/Personas/'+this.data.id).subscribe(data => {
   this.PresDeSaludDTO = data
   this.prestadorDeSalud2 = data.prestadorDeSalud.nombre;
 });;
}

 postConvenios(){
  this.PresDeSaludDTO.fechaNacimiento = this.date.value;
  this.PresDeSaludDTO.fechaVenceCarneSalud = this.date2.value;
  this.PresDeSaludDTO.prestadorDeSalud = this.favoriteSeason;
  if(this.primNFormControl.valid &&this.date.valid && this.date2.valid&& this.segNFormControl.valid&& this.primAFormControl.valid&& this.segAFormControl.valid&& this.docFormControl.valid&& this.tipoFormControl.valid&& this.telFormControl.valid&& this.dirFormControl.valid) {
  this.httpClient.put('http://159.65.222.132:804/api/Personas/'+this.data.id,this.PresDeSaludDTO ).subscribe(data => {
 
  });
  this.dialog.closeAll();
  }
 }

}
