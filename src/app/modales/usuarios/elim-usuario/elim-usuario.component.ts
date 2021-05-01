import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-elim-usuario',
  templateUrl: './elim-usuario.component.html',
  styleUrls: ['./elim-usuario.component.css']
})
export class ElimUsuarioComponent implements OnInit {

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  deleteConvenios(){
    this.httpClient.delete('http://159.65.222.132:804/api/Personas/'+this.data.id).subscribe(data => {
      
    });;
    this.dialog.closeAll();
  }
}
