import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(readonly place: PlacesService) { }

  places: any;
  position: any = {};

  ngOnInit() { }

  getPlaces() {
    navigator.geolocation.getCurrentPosition(function(position) {
      if (position) {
        this.position = position;

        if (this.position) {
          this.place.getNearbyPlaces('golf', this.position.coords.latitude.toString(), this.position.coords.longitude.toString())
          .subscribe((res) => {
            console.log(res);
            this.places = res;
          });
        }
      }
    });
  }
}
