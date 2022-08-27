import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouterModule } from './dashboard.router.module';
import { CardWidgetComponent } from './card-widget/card-widget.component';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { HighchartsChartModule } from 'highcharts-angular';

const commonImports = [CommonModule, DashboardRouterModule, HighchartsChartModule]

@NgModule({
  declarations: [
    DashboardComponent,
    CardWidgetComponent,
    ChartWidgetComponent
  ],
  imports: [...commonImports]
})
export class DashboardModule { }
