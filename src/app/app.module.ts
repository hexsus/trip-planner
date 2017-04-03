import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripInfoComponent } from './trip-info/trip-info.component';
import { AddNewTripComponent } from './add-new-trip/add-new-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripListComponent,
    TripInfoComponent,
    AddNewTripComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
