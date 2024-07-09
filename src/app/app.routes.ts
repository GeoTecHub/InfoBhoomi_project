import { Routes } from '@angular/router';
import { MapComponent } from './Map-Components/map/map.component';
import { provideRouter } from '@angular/router';
export const routes: Routes = [
   
    {path:'map',component: MapComponent},
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    
];
export const appRoutingProviders = [provideRouter(routes)];
