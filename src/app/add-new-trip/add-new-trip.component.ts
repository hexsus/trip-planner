import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-new-trip',
    templateUrl: './add-new-trip.component.html',
    styleUrls: ['./add-new-trip.component.scss']
})
export class AddNewTripComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    addNewTrip(tripName, coutry, dateLeaving, dateArrival, reminder) {
        console.log(tripName, coutry, dateLeaving, dateArrival, reminder);
    }
}
