import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(readonly http: HttpClient) { }

  getNearbyPlaces(search: string, lat: string, long: string): Observable<any> {
    return this.http.get('https://places.cit.api.here.com/places/v1/autosuggest', {
      params: {
        q: search,
        in: `${lat},${long};r=50000`,
        size: '10',
        app_id: 'NskoKMLL00jiD0oomDZ0',
        app_code: 'iunKVG82PuHhJLhdvV00rQ'
      }
    });
  }
}
