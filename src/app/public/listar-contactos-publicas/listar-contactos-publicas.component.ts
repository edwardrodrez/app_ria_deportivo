import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-contactos-publicas',
  templateUrl: './listar-contactos-publicas.component.html',
  styleUrls: ['./listar-contactos-publicas.component.css']
})
export class ListarContactosPublicasComponent implements OnInit {

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
