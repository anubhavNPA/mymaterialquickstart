import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ConnectorDialog} from './connector-dialog.component';
import { ConnectorService } from './connector.service';

@Component({
  moduleId: module.id,
  selector: 'connector',
  templateUrl: `connector.component.html`,
  styleUrls: ['connector.component.css']
})
export class ConnectorComponent  { 
 
  constructor(private connectorService: ConnectorService,
                public dialog: MdDialog) {
  }

   openDialog() {
    this.dialog.open(ConnectorDialog);
  }
}

