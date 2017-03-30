import { NgModule, ApplicationRef }       from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { MaterialModule } from '@angular/material';
//import { ButtonModule, DataTableModule }from 'primeng/primeng';
import {DataTableModule} from "angular2-datatable";

import { AppComponent }   from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { SomeComponent }  from './components/some.component';
import { DialogComponent }      from './components/dialog/dialog.component';
import { ConnectorComponent } from './components/connector/connector.component';
import { ConnectorDialog } from './components/connector/connector-dialog.component';
import { PopModalComponent, SelectedPopUpDialog } from './components/popmodal/popmodal.component';

import { DialogService }      from './components/dialog/dialog.service';
import { HomeService }    from './components/home/home.service';
import { ConnectorService }    from './components/connector/connector.service';
/**
 * Google stuff
 */
import { DialogDemo, JazzDialog, ContentElementDialog, IFrameDialog }   from './components/googledialog/dialog-demo';
import 'hammerjs/hammer';
import {MdDataTableModule} from 'ng2-material';;

@NgModule({
  imports:      [ routing, FormsModule, ReactiveFormsModule, BrowserModule, 
                  MaterialModule, DataTableModule, MdDataTableModule  ],
  declarations: [ AppComponent, SomeComponent, HomeComponent, DialogComponent, 
                  ConnectorComponent, ConnectorDialog, PopModalComponent, SelectedPopUpDialog,
                  DialogDemo, JazzDialog, ContentElementDialog, IFrameDialog],
  providers:    [ appRoutingProviders, HomeService, DialogService, ConnectorService],
  bootstrap:    [ AppComponent ],
  entryComponents: [ ConnectorDialog, SelectedPopUpDialog,
                    DialogDemo, JazzDialog, ContentElementDialog, IFrameDialog ]
})
export class AppModule { }
