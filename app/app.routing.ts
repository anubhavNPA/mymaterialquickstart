import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './components/home/home.component';
import { SomeComponent }        from './components/some.component';
import { DialogComponent }      from './components/dialog/dialog.component';
import { ConnectorComponent }   from './components/connector/connector.component';
import { PopModalComponent }    from './components/popmodal/popmodal.component';
import { DialogDemo }           from './components/googledialog/dialog-demo';


const appRoutes: Routes = [
  // Routes without authentication guards
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'some', component: SomeComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'connector', component: ConnectorComponent },
  { path: 'popmodal', component: PopModalComponent },
  { path: 'dialog-demo', component: DialogDemo }

  // Routes with authentication guards
  /*
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'importData', component: DataImporterComponent },
      { path: 'viewDefaulters', component: DefaultersViewComponent },
      { path: 'timeline/:userId', component: TimelineComponent }
    ]
  }
  */
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
