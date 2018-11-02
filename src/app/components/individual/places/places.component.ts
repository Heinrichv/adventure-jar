import { Component, OnInit, OnChanges } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit, OnChanges {
  constructor(readonly place: PlacesService) { }
  places: any[];
  private lat: string = window.localStorage.getItem('lat');
  private long: string = window.localStorage.getItem('long');

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((res) => {
      if (res) {
        window.localStorage.setItem('lat', res.coords.latitude.toString());
        window.localStorage.setItem('long', res.coords.longitude.toString());
        this.getPlaces();
      }
    });

    this.getPlaces();
  }

  ngOnChanges() {
    this.getPlaces();
  }

  getPlaces() {
    if (this.lat && this.long) {
      this.place.getNearbyPlaces(this.lat, this.long)
        .subscribe((data: any) => {
          this.places = data.results.items;
        });
    }
  }
}
