import { Routes, RouterModule, Router } from "@angular/router";
import { NgModule } from "@angular/core";
import { OutgoingComponent } from "./outgoing.component";

const routes: Routes = [{
    path: '',
    component: OutgoingComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OutgoingRouterModule {
}