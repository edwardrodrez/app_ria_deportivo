import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ElimPagosComponent } from 'src/app/modales/pagos/elim-pagos/elim-pagos.component';
import { ModPagosComponent } from 'src/app/modales/pagos/mod-pagos/mod-pagos.component';
import { AddPagosComponent } from 'src/app/modales/pagos/add-pagos/add-pagos.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerInfoPagosComponent } from 'src/app/modales/pagos/ver-info-pagos/ver-info-pagos.component';

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

@Component({
  selector: 'app-listar-pagos',
  templateUrl: './listar-pagos.component.html',
  styleUrls: ['./listar-pagos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarPagosComponent implements OnInit{

  dataSource;
  columnsToDisplay = ['id', 'valor', 'fechaVigencia' ];
  expandedElement: PeriodicElement | null;
  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.getActividades();
 
   }

  elimPago(id){
    this.dialog.open(ElimPagosComponent,{ data: {id:id} }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  modPago(element){
    this.dialog.open(ModPagosComponent,{ data: {id:element.id ,valor:element.valor,fechaVigencia:element.fechaVigencia } }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  addPago(){
    this.dialog.open(AddPagosComponent).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  verPago(element){
    this.dialog.open(VerInfoPagosComponent,{ data: element });
  }
    
  getActividades(): Observable<PeriodicElement[]>{
    return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/Precios');
  }
}
