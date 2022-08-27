import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main',
        loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
      }
    ] 
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./not-fount/not-fount.module').then(m => m.NotFountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
