import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { MaterialModule } from '@angular/material';
import { AppComponent }   from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { SomeComponent }  from './components/some.component';

import { HomeService }    from './components/home/home.service';

import 'hammerjs/hammer';

@NgModule({
  imports:      [ routing, FormsModule, BrowserModule, MaterialModule.forRoot() ],
  declarations: [ AppComponent, SomeComponent, HomeComponent ],
  providers:    [ appRoutingProviders, HomeService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
