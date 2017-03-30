import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConnectorService } from './connector.service';

@Component({
    moduleId: module.id,
    selector: 'connector-dialog',
    templateUrl: 'connector-dialog.html',
})
export class ConnectorDialog {
    constructor(public dialogRef: MdDialogRef<ConnectorDialog>) {}
}