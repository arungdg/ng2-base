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
  constructor() {
    console.log('Environment config', Config);
  }
}
