import { Component } from '@angular/core';
import { ContactInfo } from '../contact-info';

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
  timestamp: Date;
  contactInfo1: ContactInfo;
  materials: any [];

  constructor() {
    this.slider1Value=1;
    this.slider2Value=1;
    this.savedAmount=1;
    this.timestamp = new Date(2017, 10, 21);
    this.materials = [
      {id: 1, name: 'abc', quantity: 10, price: 100},
      {id: 2, name: 'def', quantity: 20, price: 200},
      {id: 3, name: 'ghi', quantity: 30, price: 300},
      {id: 4, name: 'jkl', quantity: 40, price: 400}
    ]
    //this.timestamp = new Date('2016-04-17T19:40:38.2424240+01:00');
    //this.contactInfo1 = new ContactInfo('residence', 'colaba 4th street');
  }

  onChange() {
    this.savedAmount = this.slider1Value*this.slider2Value*10;
  }
  onSelectableChange(){
    console.log('row selected');
  }
}
