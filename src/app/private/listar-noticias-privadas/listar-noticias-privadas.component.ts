import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ElimNoticiaComponent } from 'src/app/modales/noticias/elim-noticia/elim-noticia.component';
import { AddUsuarioComponent } from 'src/app/modales/usuarios/add-usuario/add-usuario.component';
import { AddNoticiaComponent } from 'src/app/modales/noticias/add-noticia/add-noticia.component';
import { ModNoticiaComponent } from 'src/app/modales/noticias/mod-noticia/mod-noticia.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, of as observableOf, merge } from 'rxjs';
import { VerInfoNoticiaComponent } from 'src/app/modales/noticias/ver-info-noticia/ver-info-noticia.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

export interface PeriodicElement {
  id: number,
  titulo: string,
  descripcion: string,
  imagen: string,
  fechaCaducidad: Date
}

export interface GithubApi {
  list: GithubIssue [],
  size: number
}

export interface GithubIssue {
  id: number,
  titulo: string,
  descripcion: string,
  imagen: string,
  fechaCaducidad: Date
}


export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) {}

  getRepoIssues(page: number,lim: number): Observable<GithubApi> {
    return this._httpClient.get<GithubApi>("http://159.65.222.132:804/api/Noticias/Paged/"+(page*lim)+"/"+lim);
  }
}

@Component({
  selector: 'app-listar-noticias-privadas',
  templateUrl: './listar-noticias-privadas.component.html',
  styleUrls: ['./listar-noticias-privadas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarNoticiasPrivadasComponent  implements AfterViewInit{

  dataSource;
  columnsToDisplay = ['id', 'titulo', 'fechaCaducidad'];
  expandedElement: PeriodicElement | null;
  exampleDatabase: ExampleHttpDatabase | null;
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  data: GithubIssue[] = [];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}


   ngAfterViewInit() {
    this.exampleDatabase = new ExampleHttpDatabase(this.httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(this.paginator.pageIndex,this.paginator.pageSize);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.size;
          return data.list;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
     
  }


  elimNoticia(id){
    this.dialog.open(ElimNoticiaComponent,{ data: {id:id} }).afterClosed().subscribe(result => {
      this.ngAfterViewInit();
    });
  }
  addNoticia(){
    this.dialog.open(AddNoticiaComponent).afterClosed().subscribe(result => {
      this.ngAfterViewInit();
    });
  }
  modNoticia(element){
    this.dialog.open(ModNoticiaComponent,{  data: element}).afterClosed().subscribe(result => {
      this.ngAfterViewInit();
    });
  }

  verNoticia(element){
    this.dialog.open(VerInfoNoticiaComponent,{ data: element });
  }

  getNoticias(): Observable<PeriodicElement[]>{
    return this.httpClient.get<PeriodicElement[]>('http://159.65.222.132:804/api/Noticias');
  }
}