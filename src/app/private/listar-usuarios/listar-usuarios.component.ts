import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ElimUsuarioComponent } from 'src/app/modales/usuarios/elim-usuario/elim-usuario.component';
import { AddUsuarioComponent } from 'src/app/modales/usuarios/add-usuario/add-usuario.component';
import { ModUsuarioComponent } from 'src/app/modales/usuarios/mod-usuario/mod-usuario.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerInfoUsuarioComponent } from 'src/app/modales/usuarios/ver-info-usuario/ver-info-usuario.component';

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


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class ListarUsuariosComponent implements OnInit{
  dataSource;
  columnsToDisplay = ['id', 'primerNombre', 'primerApellido'];
  expandedElement: PeriodicElement | null;

  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  elimUsuario(id){
    this.dialog.open(ElimUsuarioComponent,{ data: {id:id} } ).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  addUsuario(){
    this.dialog.open(AddUsuarioComponent).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  modUsuario(element){
    this.dialog.open(ModUsuarioComponent,{ data: {id:element.id ,primerNombre:element.primerNombre,primerApellido:element.primerApellido } }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  verUsuario(element){
    this.dialog.open(VerInfoUsuarioComponent,{ data: element });
  }

  getActividades(): Observable<PeriodicElement[]>{
    return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/Personas');
  }

  ngOnInit(): void {
    this.dataSource = this.getActividades();
 
   }

}
