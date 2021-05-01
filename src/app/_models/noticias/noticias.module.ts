export class NoticiasModule { 
  public titulo: string;
  public des: string;
  public foto: string;
  public fecha: string;

  constructor(titulo: string,des: string,foto: string,fecha: string){
      this.titulo = titulo;
      this.des = des;
      this.foto = foto;
      this.fecha = fecha;
  }
}
