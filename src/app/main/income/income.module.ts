import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income.component';
import { IncomeRouterModule } from './income.router.module';

const commonImports = [CommonModule, IncomeRouterModule]

@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [...commonImports]
})
export class IncomeModule { }
