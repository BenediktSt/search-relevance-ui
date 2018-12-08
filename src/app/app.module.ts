import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AverageListComponent } from './average-list/average-list.component';
import {HttpClientModule} from '@angular/common/http';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { SearchTermListComponent } from './search-term-list/search-term-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AverageListComponent,
    StatisticsListComponent,
    SearchTermListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
