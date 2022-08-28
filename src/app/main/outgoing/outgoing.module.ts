import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutgoingComponent } from './outgoing.component';
import { OutgoingRouterModule } from './outgoing.router.module';
import { SharedModule } from 'src/app/shared/shared.module';


const commonImports = [CommonModule,OutgoingRouterModule, SharedModule]

@NgModule({
  declarations: [
    OutgoingComponent
  ],
  imports: [...commonImports]
})
export class OutgoingModule { }
