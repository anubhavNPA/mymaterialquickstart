import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { MaterialModule } from '@angular/material';
//import { ButtonModule, DataTableModule }from 'primeng/primeng';
import {DataTableModule} from "angular2-datatable";

import { AppComponent }   from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { SomeComponent }  from './components/some.component';

import { HomeService }    from './components/home/home.service';

import 'hammerjs/hammer';
import {MdDataTableModule} from 'ng2-material';;

@NgModule({
  imports:      [ routing, FormsModule, BrowserModule, MaterialModule, DataTableModule, MdDataTableModule  ],
  declarations: [ AppComponent, SomeComponent, HomeComponent ],
  providers:    [ appRoutingProviders, HomeService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
