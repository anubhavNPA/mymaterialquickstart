import { Component } from '@angular/core';
import { HomeService }  from './home.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: `home.component.html`,
  styleUrls: ['home.component.css']
})
export class HomeComponent  { 
  name = 'HomeComponent';
  message = '';
  constructor(private _homeService: HomeService) {
    this.message = this._homeService.sendData();
  }
}
