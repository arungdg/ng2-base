import { Component, OnInit } from '@angular/core';
import { Config } from '../../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent { 
  constructor() {
    console.log('Environment config', Config);
  }
}