import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-elim-pagos',
  templateUrl: './elim-pagos.component.html',
  styleUrls: ['./elim-pagos.component.css']
})
export class ElimPagosComponent implements OnInit {

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  deleteConvenios(){
    this.httpClient.delete('http://159.65.222.132:804/api/Precios/'+this.data.id).subscribe(data => {
      
    });;
    this.dialog.closeAll();
  }

}
