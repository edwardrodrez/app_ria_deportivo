import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { QuitarRolComponent } from 'src/app/modales/roles/quitar-rol/quitar-rol.component';
import { AsignarRolComponent } from 'src/app/modales/roles/asignar-rol/asignar-rol.component';
export interface PeriodicElement {
  id: number;
  nombre: string;
  rol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nombre: 'Jose Perez',  rol: 'Admin'},
  {id: 2, nombre: 'Julia Lopez',   rol: 'Secret'},
  {id: 3, nombre: 'Miriam Ramirez', rol: 'Secret'},
  {id: 4, nombre: 'Matias Seas',   rol: 'Secret'},
  {id: 5, nombre: 'Carlito Tevez', rol: 'Admin'},
  {id: 6, nombre: 'Marco Solis',   rol: 'Secret'},
  {id: 7, nombre: 'Yesica Perez',  rol: 'Secret'},
  {id: 8, nombre: 'Yoselin Cabrera',   rol: 'Admin'},
  {id: 9, nombre: 'Mauricio Mendez',   rol: 'Secret'},
  {id: 10,nombre: 'Nicolas Lopez',   rol: 'Secret'},
];
@Component({
  selector: 'app-listar-roles',
  templateUrl: './listar-roles.component.html',
  styleUrls: ['./listar-roles.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarRolesComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'nombre', 'rol'];
  expandedElement: PeriodicElement | null;

  constructor(public dialog: MatDialog) {}
  quitarRol(){
    this.dialog.open(QuitarRolComponent);
  }
  asignarRol(){
    this.dialog.open(AsignarRolComponent);
  }
}
