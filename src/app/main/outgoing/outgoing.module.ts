import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutgoingComponent } from './outgoing.component';
import { OutgoingRouterModule } from './outgoing.router.module';

const commonImports = [CommonModule,OutgoingRouterModule]

@NgModule({
  declarations: [
    OutgoingComponent
  ],
  imports: [...commonImports]
})
export class OutgoingModule { }
