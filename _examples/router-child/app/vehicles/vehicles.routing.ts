import { Routes, RouterModule } from '@angular/router';

import { VehicleComponent } from './vehicle.component';
import { VehiclesComponent } from './vehicles.component';
import { VehicleListComponent } from './vehicle-list.component';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/vehicles' },
  {
    path: 'vehicles',
    component: VehiclesComponent,
    children: [
      { path: '', component: VehicleListComponent },
      { path: ':id', component: VehicleComponent },
    ]
  }
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [
  VehiclesComponent,
  VehicleListComponent,
  VehicleComponent
];
