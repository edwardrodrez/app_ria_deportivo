import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-elim-convenio',
  templateUrl: './elim-convenio.component.html',
  styleUrls: ['./elim-convenio.component.css']
})
export class ElimConvenioComponent implements OnInit {

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  deleteConvenios(){
    this.httpClient.delete('http://159.65.222.132:804/api/Convenios/'+this.data.id).subscribe(data => {
      
    });;
    this.dialog.closeAll();
  }

}
