import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
export interface noti {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  fechaCaducidad: Date;
}

@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.component.html',
  styleUrls: ['./add-noticia.component.css']
})
export class AddNoticiaComponent implements OnInit {

  NotiDTO:noti = {
    id: null,
    titulo: null,
    descripcion : null,
    imagen: null,
    fechaCaducidad: null
  }

  date = new FormControl(new Date(), [
    Validators.required,
  ]);
  imagen64:string | ArrayBuffer=null;
  url;
  nombreImnagen;
  
  constructor(public dialog: MatDialog,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.url = '/assets/imgs/default2.png',
    this.imagen64 ='/assets/imgs/default2.png'
  }
  titFormControl = new FormControl('', [
    Validators.required,
  ]);
  desFormControl = new FormControl('', [
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
  postConvenios(){
 
    if(this.titFormControl.valid && this.desFormControl.valid && this.date.valid ) {
      var img: string = this.imagen64.toString();
      this.httpClient.post('http://159.65.222.132:804/api/Noticias',{id: 0, titulo: this.NotiDTO.titulo,descripcion: this.NotiDTO.descripcion,imagen: img, fechaCaducidad: this.date.value} ).subscribe(data => {
      
      });
  
      this.dialog.closeAll();
    }
  }


}
