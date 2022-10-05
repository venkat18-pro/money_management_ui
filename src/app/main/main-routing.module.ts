import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'income',
        loadChildren: () => import('./income/income.module').then(m => m.IncomeModule)
      },
      {
        path: 'outgoing',
        loadChildren: () => import('./outgoing/outgoing.module').then(m => m.OutgoingModule)
      },
      {
        path: 'balance',
        loadChildren: () => import('./balance/balance.module').then((m) => m.BalanceModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
