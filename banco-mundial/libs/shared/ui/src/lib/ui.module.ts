import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionCardComponent } from './region-card/region-card.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [RegionCardComponent, CountryCardComponent],
  exports: [RegionCardComponent, CountryCardComponent]
})
export class UiModule {}
