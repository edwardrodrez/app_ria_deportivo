import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-ver-info-contratos',
  templateUrl: './ver-info-contratos.component.html',
  styleUrls: ['./ver-info-contratos.component.css']
})
export class VerInfoContratosComponent implements OnInit {

  constructor(private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
