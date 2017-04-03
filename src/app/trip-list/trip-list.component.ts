import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  trips = [
    {
      id: 1,
      name: 'Поездка в Питер',
      isEnded: false
    },
    {
      id: 2,
      name: 'Отдых в карпатах',
      isEnded: false
    }, {
      id: 3,
      name: 'Отпуск в Киеве',
      isEnded: true
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  selectTrip(id) {
    console.log(id);
    this.router.navigate(['/detail', id]);
  }
  addNewTrip() {
    this.router.navigate(['/new-trip']);
  }
}
