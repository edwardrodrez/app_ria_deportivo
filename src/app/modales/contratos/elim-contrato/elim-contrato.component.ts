import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-elim-contrato',
  templateUrl: './elim-contrato.component.html',
  styleUrls: ['./elim-contrato.component.css']
})
export class ElimContratoComponent implements OnInit {

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  deleteConvenios(){
    this.httpClient.delete('http://159.65.222.132:804/api/Contratos/'+this.data.id).subscribe(data => {
      
    });;
    this.dialog.closeAll();
  }

}
