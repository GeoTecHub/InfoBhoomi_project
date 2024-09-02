import { Routes } from '@angular/router';
// import { MapComponent } from './Map-Components/map/map.component';
import { MainComponent } from './main/main.component';

import { provideRouter } from '@angular/router';
export const routes: Routes = [
  // { path: 'map', component: MapComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];
export const appRoutingProviders = [provideRouter(routes)];
