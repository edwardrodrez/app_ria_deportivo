import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
export interface noti {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  fechaCaducidad: string;
}

@Component({
  selector: 'app-mod-noticia',
  templateUrl: './mod-noticia.component.html',
  styleUrls: ['./mod-noticia.component.css']
})
export class ModNoticiaComponent implements OnInit {

  NotiDTO:noti = {
    id: null,
    titulo: null,
    descripcion : null,
    imagen: null,
    fechaCaducidad: null
  }

 

  imagen64:string | ArrayBuffer=null;
  url;
  nombreImnagen;

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getActividad();
    this.imagen64 = this.data.imagen
  }
  titFormControl = new FormControl('', [
    Validators.required,
  ]);
  desFormControl = new FormControl('', [
    Validators.required,
  ]);
  date = new FormControl(new Date(), [
    Validators.required,
  ]);
  handleFileInput(files: FileList,event:any) {
    let me = this;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    me.imagen64=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  getActividad(){
    return this.httpClient.get<noti>('http://159.65.222.132:804/api/Noticias/'+this.data.id).subscribe(data => {
      this.NotiDTO = data
    });
  }

  putConvenios(){
    this.NotiDTO.fechaCaducidad = this.date.value;
    if(this.titFormControl.valid && this.desFormControl.valid && this.date.valid ) {
      var img: string = this.imagen64.toString();
  
        this.httpClient.put('http://159.65.222.132:804/api/Noticias/'+this.data.id,{id: this.data.id, titulo: this.NotiDTO.titulo,descripcion: this.NotiDTO.descripcion, imagen: img, fechaCaducidad: this.NotiDTO.fechaCaducidad} ).subscribe(data => {
   
        });     
      this.dialog.closeAll();
    }
  }

}
