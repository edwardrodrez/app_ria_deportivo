import { Component, OnInit } from '@angular/core';
import { NoticiasModule } from 'src/app/_models/noticias/noticias.module';
import {MatDialog} from '@angular/material/dialog';
import { InfoNoticiaComponent } from 'src/app/modales/noticia-publica/info-noticia/info-noticia.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerInfoNoticiaComponent } from 'src/app/modales/noticias/ver-info-noticia/ver-info-noticia.component';

import {DomSanitizer} from '@angular/platform-browser';

export interface PeriodicElement {
  id: number,
  titulo: string,
  descripcion: string,
  imagen: string,
  fechaCaducidad: Date
}
@Component({
  selector: 'app-listar-noticias-publicas',
  templateUrl: './listar-noticias-publicas.component.html',
  styleUrls: ['./listar-noticias-publicas.component.css']
})
export class ListarNoticiasPublicasComponent implements OnInit {
  public dataSource :PeriodicElement[];
  public noticias: NoticiasModule[] = [{titulo:'Noticia 1',des:'Esta es la descripcion 1',foto: 'https://www.marketingregistrado.com/img/noticias/marcas-sustentables.jpg', fecha: 'asdas'},{titulo:'Noticia 2',des:'Esta es la descripcion 2',foto: 'https://heroicadeportiva.com/wp-content/uploads/2016/01/12507697_111197292594511_8132368683210438927_n.jpg', fecha: 'asdas'} ,{titulo:'Noticia 3',des:'Esta es la descripcion 3',foto: 'https://salamancaentrena.com/wp-content/uploads/2016/05/Nutricion-Deportiva-entrenasalamanca-2016.jpg', fecha: 'asdas'},{titulo:'Noticia 1',des:'Esta es la descripcion 1',foto: 'https://www.marketingregistrado.com/img/noticias/marcas-sustentables.jpg', fecha: 'asdas'},{titulo:'Noticia 2',des:'Esta es la descripcion 2',foto: 'https://heroicadeportiva.com/wp-content/uploads/2016/01/12507697_111197292594511_8132368683210438927_n.jpg', fecha: 'asdas'} ,{titulo:'Noticia 3',des:'Esta es la descripcion 3',foto: 'https://salamancaentrena.com/wp-content/uploads/2016/05/Nutricion-Deportiva-entrenasalamanca-2016.jpg', fecha: 'asdas'},{titulo:'Noticia 1',des:'Esta es la descripcion 1',foto: 'https://www.marketingregistrado.com/img/noticias/marcas-sustentables.jpg', fecha: 'asdas'},{titulo:'Noticia 2',des:'Esta es la descripcion 2',foto: 'https://heroicadeportiva.com/wp-content/uploads/2016/01/12507697_111197292594511_8132368683210438927_n.jpg', fecha: 'asdas'} ];
  imageUrl;
  imagePath;
  constructor(public dialog: MatDialog,private httpClient: HttpClient,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  verimagen(element){
    let TYPED_ARRAY = new Uint8Array (element);
    const STRING_CHAR = String.fromCharCode.apply (null, TYPED_ARRAY);
    let base64String = btoa(String.fromCharCode(element));
    console.log(base64String)
    return this.imagePath = base64String;
  }
  openNoticia(x){
      this.dialog.open(InfoNoticiaComponent,{ data: {id:x.id ,titulo:x.titulo,descripcion:x.descripcion,imagen:x.imagen,fechaCaducidad:x.fechaCaducidad} });
  }

  getNoticias(){
    this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/Noticias/Activas').subscribe(data => {
      this.dataSource = data

   });;
 }

 sanitize( url:string ) {
  console.log(url)
  return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  _arrayBufferToBase64( element ) {
    console.log(element)
    var binary = '';
    var bytes = new Uint8Array( element );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
       binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }
  
}
