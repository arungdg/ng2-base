import { Component } from '@angular/core';
import { Config } from '../shared/index';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  constructor() {
    console.log('Environment config', Config);
  }
 }
