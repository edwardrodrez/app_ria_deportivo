import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ElimCategoriaComponent } from 'src/app/modales/categorias/elim-categoria/elim-categoria.component';
import { AddCategoriaComponent } from 'src/app/modales/categorias/add-categoria/add-categoria.component';
import { ModCategoriaComponent } from 'src/app/modales/categorias/mod-categoria/mod-categoria.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerInfoCategoriaComponent } from 'src/app/modales/categorias/ver-info-categoria/ver-info-categoria.component';

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



@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})

export class ListarCategoriasComponent implements OnInit{
  dataSource;
  columnsToDisplay = ['id', 'nombre', 'activo'];
  expandedElement: PeriodicElement | null;

  ngOnInit(): void {
    this.dataSource = this.getActividades();
 
   }

  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  elimCategoria(id){
    this.dialog.open(ElimCategoriaComponent,{ data: {id:id} }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  addCategoria(){
    this.dialog.open(AddCategoriaComponent).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  modCategoria(element){
    this.dialog.open(ModCategoriaComponent,{ data: {id:element.id ,nombre:element.nombre,activo:element.activo } }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  verCategoria(element){
    this.dialog.open(VerInfoCategoriaComponent,{ data: element });
  }

  getActividades(): Observable<PeriodicElement[]>{
    return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/Categorias');
  }
}
