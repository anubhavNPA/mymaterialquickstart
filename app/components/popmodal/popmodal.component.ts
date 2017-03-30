import {Component, Inject, ViewChild, TemplateRef} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'popmodal',
    templateUrl: 'popmodal.component.html',
    styleUrls: ['popmodal.component.css']
})

export class PopModalComponent {
    dialogRef: MdDialogRef<SelectedPopUpDialog>;
    message: string;
    config: MdDialogConfig = {
        disableClose: true,
        width: '400px',
        height: '250px',
        position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
        },
        data: {
        message: 'Jazzy jazz jazz'
        }
    };

    constructor(private mdDialog: MdDialog) {}

    onselect() {
        console.log('button Popped');
        this.message = 'pop it up';
        //this.mdDialog
        this.dialogRef =  this.mdDialog.open(SelectedPopUpDialog, this.config );
        this.dialogRef.componentInstance.dialogMessage = this.message;
        this.mdDialog.afterOpen.subscribe(x => console.log(x));
    }
}

@Component({
  selector: 'selectedPopUp',
    template: `<button (click)="gotoDetail()"> close the shit</button>
    <h4>{{message | uppercase}}</h4>
    <button (click)="popDialogRef.close()">another one</button>
    <md-spinner style="height: 20px; width:20px" ></md-spinner>
    `
})
export class SelectedPopUpDialog {
    dialogMessage: string;
    //public popDialogRef: MdDialogRef<SelectedPopUpDialog>;
    constructor(public popDialogRef: MdDialogRef<SelectedPopUpDialog>){}
    gotoDetail() {
        console.log('click the chit happened');
        this.popDialogRef.close();
    }
}