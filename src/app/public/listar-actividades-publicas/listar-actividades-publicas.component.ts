import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-actividades-publicas',
  templateUrl: './listar-actividades-publicas.component.html',
  styleUrls: ['./listar-actividades-publicas.component.css']
})
export class ListarActividadesPublicasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
