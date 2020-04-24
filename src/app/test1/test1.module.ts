import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from './test1.component';
import { NgxNatLinkModule } from 'ngx-nat-link';

@NgModule({
  declarations: [Test1Component],
  imports: [CommonModule, Test1RoutingModule, NgxNatLinkModule],
})
export class Test1Module {}
