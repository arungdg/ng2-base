import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [CommonModule, MapRoutingModule, SharedModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEzeHHRm_iDhmgjqsPRvPVqvtmZX_QbqM'
    })],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
