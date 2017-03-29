import { Component } from '@angular/core';


import { DialogService } from './dialog.service';

@Component({
  moduleId: module.id,
  selector: 'dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent  {
    message = '';
    constructor (private dialogService: DialogService) {
        this.message = 'weird chrome';
        console.log('dialog component' + this.message);
    }
}