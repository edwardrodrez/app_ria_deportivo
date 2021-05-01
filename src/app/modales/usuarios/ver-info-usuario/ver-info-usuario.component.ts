import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-info-usuario',
  templateUrl: './ver-info-usuario.component.html',
  styleUrls: ['./ver-info-usuario.component.css']
})
export class VerInfoUsuarioComponent implements OnInit {

  constructor(private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}