import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ElimMediopagosComponent } from 'src/app/modales/mediopagos/elim-mediopagos/elim-mediopagos.component';
import { AddMediopagosComponent } from 'src/app/modales/mediopagos/add-mediopagos/add-mediopagos.component';
import { ModMediopagosComponent } from 'src/app/modales/mediopagos/mod-mediopagos/mod-mediopagos.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  id: number;
  nombre: string;
  activo: boolean;
}



@Component({
  selector: 'app-listar-mediosdepago',
  templateUrl: './listar-mediosdepago.component.html',
  styleUrls: ['./listar-mediosdepago.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarMediosdepagoComponent implements OnInit {

  dataSource;
  columnsToDisplay = ['id', 'nombre', 'activo'];
  expandedElement: PeriodicElement | null;
  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.getActividades();
 
   }

  elimMedio(id){
    this.dialog.open(ElimMediopagosComponent,{ data: {id:id} }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  addMedio(){
    this.dialog.open(AddMediopagosComponent).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  modMedio(element){
    this.dialog.open(ModMediopagosComponent,{ data: {id:element.id ,nombre:element.nombre,activo:element.activo } }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  getActividades(): Observable<PeriodicElement[]>{
    return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/MediosDePago');
  }

}
