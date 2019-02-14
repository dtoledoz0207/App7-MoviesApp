import { Injectable } from '@angular/core';
import {HttpClient, JsonpClientBackend} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class PeliculasService {

  private apikey:string = "3f8ace2c02ff13704411f19cbfc2187d";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private http:HttpClient, jsonp:JsonpClientBackend) { }

  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '').pipe( map(res => {
      return res;
    }));
  }

}
