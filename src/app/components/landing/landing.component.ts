import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {
  public places: any[] = [];

  constructor(readonly place: PlacesService) {

  }

  getPlaces() {
    window.navigator.geolocation.getCurrentPosition(function(position) {
      this.place.getNearbyPlaces('golf', position.coords.latitude.toString(), position.coords.longitude.toString())
        .subscribe((res) => {
          console.log(res);
          this.places = res;
        });
    });
  }
}
