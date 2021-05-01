import { Component , OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ElimContratoComponent } from 'src/app/modales/contratos/elim-contrato/elim-contrato.component';
import { AddContratoComponent } from 'src/app/modales/contratos/add-contrato/add-contrato.component';
import { ModContratoComponent } from 'src/app/modales/contratos/mod-contrato/mod-contrato.component';
import { VerInfoContratosComponent } from 'src/app/modales/contratos/ver-info-contratos/ver-info-contratos.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface PeriodicElement {
    id: Number,
    fechaHoraGenerado: Date,
    usuarioGenero: string,
    fechaComienzo: Date,
    activo: true
    socio: {
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
      prestadorDeSalud: {
        id: Number,
        nombre: string,
        activo: true
      }
    },
    convenio: {
      id: Number,
      nombre: string,
      porcentajeDescuento: 0,
      activo: true
    },
    categoria: {
      id: Number,
      nombre: string,
      activo: true,
      precios: [
        {
          id: Number,
          valor: Number,
          fechaVigencia: Date
        }
      ]
    },
    medioDePago: {
      id: Number,
      nombre: string,
      activo: true
    },
    
}

@Component({
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListarContratosComponent implements OnInit{

  dataSource;
  columnsToDisplay = ['id', 'fechaComienzo', 'activo'];
  expandedElement: PeriodicElement | null;

  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.getActividades();
 
   }


  elimContrato(id){
    this.dialog.open(ElimContratoComponent,{ data: {id:id} }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  addContrato(){
    this.dialog.open(AddContratoComponent).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  modContrato(element){
    this.dialog.open(ModContratoComponent,{ data: element }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  verContrato(element){
    this.dialog.open(VerInfoContratosComponent,{ data: element });
  }

  getActividades(): Observable<PeriodicElement[]>{
    return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/Contratos');
  }
}