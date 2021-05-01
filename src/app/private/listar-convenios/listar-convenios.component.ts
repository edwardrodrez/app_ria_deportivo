
import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElimConvenioComponent } from 'src/app/modales/convenios/elim-convenio/elim-convenio.component';
import { AddConvenioComponent } from 'src/app/modales/convenios/add-convenio/add-convenio.component';
import { ModConvenioComponent } from 'src/app/modales/convenios/mod-convenio/mod-convenio.component';

export interface PeriodicElement {
  id: number;
  nombre: string;
  porcentajeDescuento : number,
  activo: boolean;
}

@Component({
  selector: 'app-listar-convenios',
  templateUrl: './listar-convenios.component.html',
  styleUrls: ['./listar-convenios.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarConveniosComponent implements OnInit{

  dataSource;
  columnsToDisplay = ['nombre', 'porcentajeDescuento', 'activo'];
  expandedElement: PeriodicElement | null;

  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.getConvenios();
 
   }

  elimConvenio(id){
    this.dialog.open(ElimConvenioComponent, { data: {id:id} }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  addConvenio(){
    this.dialog.open(AddConvenioComponent).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  modConvenio(element){
    this.dialog.open(ModConvenioComponent,{ data: {id:element.id ,nombre:element.nombre,porcentajeDescuento:element.porcentajeDescuento, activo:element.activo } } ).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  getConvenios(): Observable<PeriodicElement[]>{
    return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/Convenios');
  }


}
