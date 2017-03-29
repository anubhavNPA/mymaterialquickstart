import { Component } from '@angular/core';
import { ContactInfo } from '../contact-info';
import { Http, Headers }                from '@angular/http';
import { NgForm }                       from '@angular/forms';
import 'rxjs/add/operator/map';


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
  nameProject = 'Moneytor RuleEngine';
    value1 = 2;
    materialgender: string;
    someRule: any;
    DPDvalue: number;
    DefaultAmount: number;
    loanTypes = ['home', 'auto', 'credit card', 'personal'];
    selectedLoanType: string;
    //createdRule = new Rule('', '' , false, 'male', 'loantype', '0%');
    showModal = false;
    buttonRed = true;
    tiles = [
    {text: 'One i dont think i want to be here', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'One i dont think i want to be here', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'One i dont think i want to be here', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'One i dont think i want to be here', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two some things look worse with time', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three or four doesnt matter', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four i dont know why i am here', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

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
