import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ElimPrestsaludComponent } from 'src/app/modales/prestsalud/elim-prestsalud/elim-prestsalud.component';
import { AddPrestsaludComponent } from 'src/app/modales/prestsalud/add-prestsalud/add-prestsalud.component';
import { ModPrestsaludComponent } from 'src/app/modales/prestsalud/mod-prestsalud/mod-prestsalud.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface PeriodicElement {
  id: number;
  nombre: string;
  activo: boolean;
}


@Component({
  selector: 'app-listar-prestadoresdesalud',
  templateUrl: './listar-prestadoresdesalud.component.html',
  styleUrls: ['./listar-prestadoresdesalud.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarPrestadoresdesaludComponent implements OnInit {

  dataSource;
  columnsToDisplay = ['id', 'nombre', 'activo'];
  expandedElement: PeriodicElement | null;
  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.getPrestadoresdesalud();
 
   }

  elimPrestador(id){
    this.dialog.open(ElimPrestsaludComponent,{ data: {id:id} } ).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  addPrestador(){
    this.dialog.open(AddPrestsaludComponent).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  modPrestador(element){
    this.dialog.open(ModPrestsaludComponent,{ data: {id:element.id ,nombre:element.nombre,activo:element.activo } }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  getPrestadoresdesalud(): Observable<PeriodicElement[]>{
    return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/PrestadoresDeSalud');
  }
}
