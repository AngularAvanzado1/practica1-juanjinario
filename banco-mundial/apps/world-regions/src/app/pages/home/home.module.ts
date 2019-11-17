import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ngModuleJitUrl } from '@angular/compiler';
import { UiModule } from '@b-mundial/ui';
import { MaterialModule } from '../../shared/material.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild(routes),
    UiModule,
    MaterialModule
  ]
})
export class HomeModule { }
