import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'https://music.fly.dev/artists';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
