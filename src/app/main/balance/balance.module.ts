import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalanceComponent } from './balance.component';


@NgModule({
  declarations: [
    BalanceComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ]
})
export class BalanceModule { }
