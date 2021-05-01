import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-info-categoria',
  templateUrl: './ver-info-categoria.component.html',
  styleUrls: ['./ver-info-categoria.component.css']
})
export class VerInfoCategoriaComponent implements OnInit {


  constructor(private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}