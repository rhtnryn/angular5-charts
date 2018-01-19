import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  MatButtonModule,
  MatMenuModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { MulticolorChartComponent } from "./multicolor-chart/multicolor-chart.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'pie', component: PieChartComponent },
  { path: 'bar',      component: BarChartComponent },
  {
    path: 'multicolor',
    component: MulticolorChartComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarChartComponent,
    MulticolorChartComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    MatButtonModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
