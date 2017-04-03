import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TripListComponent} from './trip-list/trip-list.component';
import {TripInfoComponent} from './trip-info/trip-info.component';
import {AddNewTripComponent} from './add-new-trip/add-new-trip.component';

const routes: Routes = [
  {
    path: '',
    component: TripListComponent,
    children: []
  },
  {
    path: 'detail/:id',
    component: TripInfoComponent
  },
  {
    path: 'new-trip',
    component: AddNewTripComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
