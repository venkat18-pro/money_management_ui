import { CommonModule } from "@angular/common"
import { DashboardModule } from "../main/dashboard/dashboard.module"
import { IncomeModule } from "../main/income/income.module"
import { MainRoutingModule } from "../main/main-routing.module"
import { OutgoingModule } from "../main/outgoing/outgoing.module"
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from "@angular/router";


export const IMPORTS = {
    main: [
        CommonModule,
        MainRoutingModule,
        DashboardModule,
        IncomeModule,
        OutgoingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatListModule,
        RouterModule
    ]
}

export const EXPORTS = {

}