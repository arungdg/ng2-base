import { Component, OnInit } from '@angular/core';
import { Config } from '../../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent {
  constructor() {
    console.log('Environment config', Config);
  }
 }