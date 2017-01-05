import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, MapRoutingModule, SharedModule],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
