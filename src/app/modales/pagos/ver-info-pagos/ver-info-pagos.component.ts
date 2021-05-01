import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-info-pagos',
  templateUrl: './ver-info-pagos.component.html',
  styleUrls: ['./ver-info-pagos.component.css']
})
export class VerInfoPagosComponent implements OnInit {

  constructor(private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}