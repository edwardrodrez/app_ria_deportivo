import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-somos',
  templateUrl: './info-somos.component.html',
  styleUrls: ['./info-somos.component.css']
})
export class InfoSomosComponent implements OnInit {

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
