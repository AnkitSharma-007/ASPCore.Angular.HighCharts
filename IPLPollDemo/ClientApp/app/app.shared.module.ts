import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular-highcharts';

import { TeamService } from './services/teamservice.service'
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { IPLPoll } from './components/Poll/IPLPoll.component';
import { PollResult } from './components/Results/PollResult.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        IPLPoll,
        PollResult
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ChartModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'poll', component: IPLPoll },
            { path: 'results', component: PollResult },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [TeamService]
})
export class AppModuleShared {
}
