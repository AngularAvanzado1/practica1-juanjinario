import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module'
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'region/:code', loadChildren: () => import('./pages/regions/regions.module').then(m => m.RegionsModule) },
      { path: 'region', loadChildren: () => import('./pages/regions/regions.module').then(m => m.RegionsModule) },
      { path: 'country/:id', loadChildren: () => import('./pages/country/country.module').then(m => m.CountryModule) },
      { path: 'country', loadChildren: () => import('./pages/country/country.module').then(m => m.CountryModule) },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
