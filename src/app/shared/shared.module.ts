import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
