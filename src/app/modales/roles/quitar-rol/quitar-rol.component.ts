import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export interface rol {
  username: string;
}

@Component({
  selector: 'app-quitar-rol',
  templateUrl: './quitar-rol.component.html',
  styleUrls: ['./quitar-rol.component.css']
})
export class QuitarRolComponent implements OnInit {

  rolDTO:rol = {
    username: null,

  }

  constructor(private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  selected = 'option1';

  postConvenios(){
    var op = "USER";
    this.httpClient.post('http://159.65.222.132:804/api/Account/addrole',{username: this.rolDTO.username,role: op} ).subscribe(data => {
      
    });
  }
}
