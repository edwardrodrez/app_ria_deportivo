import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
export interface rol {
  
    username: string;


}

@Component({
  selector: 'app-asignar-rol',
  templateUrl: './asignar-rol.component.html',
  styleUrls: ['./asignar-rol.component.css']
})
export class AsignarRolComponent implements OnInit {

  rolDTO:rol = {
    username: null,

  }

  constructor(public dialog: MatDialog,private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  selected = 'option1';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  postConvenios(){
    var op = "USER";
    if(this.selected == 'option1'){
      op = "ADMIN";
    }
    if(this.selected == 'option2'){
      op = "SECRETARIA";
    }
    if(this.selected == 'option3'){
      op = "USER";
    }


    if(this.emailFormControl.valid ) {
      this.httpClient.post('http://159.65.222.132:804/api/Account/addrole',{username: this.rolDTO.username,role: op} ).subscribe(data => {
      
      });
      this.dialog.closeAll();
    } 
  }
}
