import { Component, OnInit } from '@angular/core';
import { Config } from '../shared/index';

/**
 * This class represents the lazy loaded MapComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class MapComponent {

  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  constructor() {
    console.log('Environment config', Config);
  }
}
