import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {FormControl} from '@angular/forms';
export interface PeriodicElement {
    id: string,
    titulo: string,
    descripcion: string,
    imagen: string,
    fechaCaducidad: string
}

@Component({
  selector: 'app-ver-info-noticia',
  templateUrl: './ver-info-noticia.component.html',
  styleUrls: ['./ver-info-noticia.component.css']
})
export class VerInfoNoticiaComponent implements OnInit {
  NoticiaDTO:PeriodicElement = {
    id: null,
    titulo: null,
    descripcion: null,
    imagen: null,
    fechaCaducidad: null
  }
  constructor(private httpClient: HttpClient,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.NoticiaDTO.titulo = this.data.titulo;
    this.NoticiaDTO.descripcion = this.data.descripcion;
    this.NoticiaDTO.imagen = this.data.imagen;
    this.NoticiaDTO.fechaCaducidad = this.data.fechaCaducidad;
  }

}
