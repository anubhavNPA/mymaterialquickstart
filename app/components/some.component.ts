import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'some',
  templateUrl: `some.component.html`,
  styleUrls: ['some.component.css']
})
export class SomeComponent  { 
  name = 'SomeComponent';
  slider1Value: number;
  slider2Value: number;
  savedAmount = 1;

  constructor() {
    this.slider1Value=1;
    this.slider2Value=1;
    this.savedAmount=1;
  }

  onChange() {
    this.savedAmount = this.slider1Value*this.slider2Value*10;
  }
}
