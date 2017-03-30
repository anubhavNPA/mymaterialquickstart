import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  moduleId: module.id,
  selector: 'dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent implements OnInit {
    @Input() value: string;
    @Input() title: string;
    @Input() placeholder: string;
    @Input() showPrompt: boolean;
    @Input() okText: string;
    @Input() cancelText: string;
    @Output() valueEmitted = new EventEmitter<string>();
    //message = '';
    constructor (private dialogService: DialogService) {
        this.value = 'weird chrome';
        this.okText = 'OK';
        this.cancelText = 'Cancel';
        console.log('dialog component' + this.value);
    }

    ngOnInit() {}

    emitValue(value: any) {
    this.valueEmitted.emit(value);
  }
}