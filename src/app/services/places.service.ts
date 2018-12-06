import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(readonly http: HttpClient) { }

  getNearbyPlaces(lat: string, long: string) {
    return this.http.get('https://places.cit.api.here.com/places/v1/discover/explore', {
      params: {
        in: `${lat},${long};r=50000`,
        app_id: 'NskoKMLL00jiD0oomDZ0',
        app_code: 'iunKVG82PuHhJLhdvV00rQ',
        show_content: 'wikipedia',
        show_refs: 'facebook,pvid',
        cat: 'going-out,sights-museums,leisure-outdoor,natural-geographical',
        size: '15'
      }
    });
  }
}
