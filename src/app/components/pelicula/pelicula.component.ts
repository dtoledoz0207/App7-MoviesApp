import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;

  constructor(public _ps:PeliculasService, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(parametros => {
      //console.log(parametros);
      this._ps.getPelicula(parametros['id']).subscribe(infoPelicula => {
        //console.log(infoPelicula);
        this.pelicula = infoPelicula;
      });
    });

  }

  ngOnInit() {
  }

}
