import { Injectable } from '@angular/core';
import {HttpClient, JsonpClientBackend} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class PeliculasService {

  private apikey:string = "3f8ace2c02ff13704411f19cbfc2187d";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor(private http:HttpClient, jsonp:JsonpClientBackend) { }


  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1 }-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1 }-${hasta.getDate()}`;

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '').pipe( map(res => {
      
      
      return res['results'];
    }));
  }

  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '').pipe( map(res => {
      return res['results'];
    }));
  }


  getPopularesNinos(){
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '').pipe( map(res => {
      return res['results'];
    }));
  }

  buscarPelicula(texto:string){
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '').pipe(map (res => {
      this.peliculas = res['results'];
      //console.log(this.peliculas);
      return res['results'];
    }));
  }

  getPelicula(id:string){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '').pipe( map(res => {
      //console.log(res);
      return res;
    }));
  }

}
