import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';

import { OutgoingComponent } from './outgoing.component';
import { OutgoingRouterModule } from './outgoing.router.module';
import { SharedModule } from 'src/app/shared/shared.module';


const commonImports = [CommonModule,OutgoingRouterModule, SharedModule, MatDialogModule]

@NgModule({
  declarations: [
    OutgoingComponent
  ],
  imports: [...commonImports]
})
export class OutgoingModule { }
