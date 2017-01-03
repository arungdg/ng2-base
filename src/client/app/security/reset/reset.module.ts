import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetComponent } from './reset.component';
import { ResetRoutingModule  } from './reset-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, ResetRoutingModule, SharedModule],
  declarations: [ResetComponent],
  exports: [ResetComponent],
  providers: []
})
export class ResetModule { }
