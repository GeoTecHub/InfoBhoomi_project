import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [appRoutingProviders, provideAnimationsAsync()],
}).catch(err => console.error(err));
