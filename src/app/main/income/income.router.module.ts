import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { IncomeComponent } from "./income.component";

const routes: Routes = [{
    path: '',
    component: IncomeComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncomeRouterModule {
}