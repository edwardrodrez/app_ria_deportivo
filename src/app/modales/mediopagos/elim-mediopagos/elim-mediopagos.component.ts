import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-elim-mediopagos',
  templateUrl: './elim-mediopagos.component.html',
  styleUrls: ['./elim-mediopagos.component.css']
})
export class ElimMediopagosComponent implements OnInit {

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  deleteActividades(){
    this.httpClient.delete('http://159.65.222.132:804/api/MediosDePago/'+this.data.id).subscribe(data => {
      
    });;
    this.dialog.closeAll();
  }
}
