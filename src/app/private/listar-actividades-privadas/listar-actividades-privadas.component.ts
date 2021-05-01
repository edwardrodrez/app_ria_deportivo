import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ElimActividadComponent } from 'src/app/modales/actividades/elim-actividad/elim-actividad.component';
import { AddActividadComponent } from 'src/app/modales/actividades/add-actividad/add-actividad.component';
import { ModActividadComponent } from 'src/app/modales/actividades/mod-actividad/mod-actividad.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  id: number;
  nombre: string;
  activo: boolean;
}


@Component({
  selector: 'app-listar-actividades-privadas',
  templateUrl: './listar-actividades-privadas.component.html',
  styleUrls: ['./listar-actividades-privadas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarActividadesPrivadasComponent implements OnInit{

  Actividades;
  dataSource;
  columnsToDisplay = ['id', 'nombre', 'activo'];
  expandedElement: PeriodicElement | null;
  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.getActividades();
 
   }

    elimActividad(id){
      this.dialog.open(ElimActividadComponent,{ data: {id:id} } ).afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }
    addActividad(){
      this.dialog.open(AddActividadComponent).afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }
    modActividad(element){
      this.dialog.open(ModActividadComponent,{ data: {id:element.id ,nombre:element.nombre,activo:element.activo } }).afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }

    getActividad(){
      return this.httpClient.get<PeriodicElement>('http://159.65.222.132:804/api/Actividades/1').subscribe(data => {
        console.log(data.id)
        this.Actividades = data
      });
    }
  
    getActividades(): Observable<PeriodicElement[]>{
      return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/Actividades');
    }
  

}
