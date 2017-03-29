import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { MaterialModule } from '@angular/material';
//import { ButtonModule, DataTableModule }from 'primeng/primeng';
import {DataTableModule} from "angular2-datatable";

import { AppComponent }   from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { SomeComponent }  from './components/some.component';
import { DialogComponent }      from './components/dialog/dialog.component';

import { DialogService }      from './components/dialog/dialog.service';
import { HomeService }    from './components/home/home.service';

import 'hammerjs/hammer';
import {MdDataTableModule} from 'ng2-material';;

@NgModule({
  imports:      [ routing, FormsModule, ReactiveFormsModule, BrowserModule, MaterialModule, DataTableModule, MdDataTableModule  ],
  declarations: [ AppComponent, SomeComponent, HomeComponent, DialogComponent],
  providers:    [ appRoutingProviders, HomeService, DialogService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
