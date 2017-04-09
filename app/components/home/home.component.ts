import { Component } from '@angular/core';
import { HomeService }  from './home.service';

import { Due } from '../../models/due';
import { Loan } from '../../models/loan';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: `home.component.html`,
  styleUrls: ['home.component.css']
})
export class HomeComponent  { 
  name = 'HomeComponent';
  myDues: Due;
  myLoan: Loan;
  tiles = [
    {text: 'One i dont think i want to be here', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'One i dont think i want to be here', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'One i dont think i want to be here', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'One i dont think i want to be here', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two some things look worse with time', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three or four doesnt matter', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four i dont know why i am here', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  message = '';
  constructor(private _homeService: HomeService) {
    this.message = this._homeService.sendData();
    this.myDues = new Due(9999, 234, 90);
    this.myLoan = new Loan(99999, 2345, 54, 'chennai');
  }
}
