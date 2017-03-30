import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { ConnectorDialog} from './connector-dialog.component';
import { ConnectorService } from './connector.service';

@Component({
  moduleId: module.id,
  selector: 'connector',
  templateUrl: `connector.component.html`,
  styleUrls: ['connector.component.css']
})
export class ConnectorComponent  { 
  selectedOption: string; 
  showDialog: boolean;
  constructor(private connectorService: ConnectorService,
                public dialog: MdDialog) {
                  this.showDialog = false;
  }

   openDialog() {
    let dialogRef = this.dialog.open(ConnectorDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
    //this.dialog.open(DialogOverviewExampleDialog);
  }

  todoDialog(){
    console.log('button clicked');
    this.showDialog = true;
}
  update(e: any) {
    console.log('value');
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {}

