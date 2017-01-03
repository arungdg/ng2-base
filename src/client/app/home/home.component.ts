import { Component, OnInit } from '@angular/core';
import { Config } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
