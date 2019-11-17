import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from '@b-mundial/ui';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { MaterialModule } from '../../shared/material.module';

const routes: Routes = [
  { path: '', component: CountryComponent }
];

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    RouterModule.forChild(routes),
    UiModule,
    MaterialModule
  ]
})
export class CountryModule { }
