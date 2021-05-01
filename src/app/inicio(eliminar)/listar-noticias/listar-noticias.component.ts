import { Component, OnInit } from '@angular/core';
import { NoticiasModule } from 'src/app/_models/noticias/noticias.module';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {

  public noticias: NoticiasModule[] = [{titulo:'Noticia 1',des:'Esta es la descripcion 1',foto: 'https://www.marketingregistrado.com/img/noticias/marcas-sustentables.jpg', fecha: 'asdas'},{titulo:'Noticia 2',des:'Esta es la descripcion 2',foto: 'https://heroicadeportiva.com/wp-content/uploads/2016/01/12507697_111197292594511_8132368683210438927_n.jpg', fecha: 'asdas'} ,{titulo:'Noticia 3',des:'Esta es la descripcion 3',foto: 'https://salamancaentrena.com/wp-content/uploads/2016/05/Nutricion-Deportiva-entrenasalamanca-2016.jpg', fecha: 'asdas'} ];
  constructor() { }

  ngOnInit(): void {
  }

}
