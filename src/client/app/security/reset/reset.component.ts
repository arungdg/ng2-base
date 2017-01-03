import { Component, OnInit } from '@angular/core';
import { Config } from '../../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-reset',
  templateUrl: 'reset.component.html',
  styleUrls: ['reset.component.css']
})
export class ResetComponent { 
  constructor() {
    console.log('Environment config', Config);
  }
}