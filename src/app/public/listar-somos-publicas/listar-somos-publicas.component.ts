import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-somos-publicas',
  templateUrl: './listar-somos-publicas.component.html',
  styleUrls: ['./listar-somos-publicas.component.css']
})
export class ListarSomosPublicasComponent implements OnInit {

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
