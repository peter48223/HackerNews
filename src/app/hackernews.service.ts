import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from './story';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  constructor( private http: HttpClient) { }

  private hackerNewsUrl = 'https://hackernewsapiaaa.azurewebsites.net/api/hackernews';

  getHackerNews (): Observable<Story[]> {
    return this.http.get<Story[]>(this.hackerNewsUrl)
  }

}

