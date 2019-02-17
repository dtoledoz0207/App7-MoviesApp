import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  termino:string = "";

  constructor(public _ps:PeliculasService, private activatedRoute:ActivatedRoute) { 

    this.activatedRoute.params.subscribe(parametros => {
      //console.log(parametros['texto']);
      if(parametros['texto']){
        this.termino = parametros['texto'];
        this.buscarPelicula();
      }
    });

  }

  ngOnInit() {
  }

  buscarPelicula(){

    if(this.termino.length == 0){
      return;
    }else{

      this._ps.buscarPelicula(this.termino).subscribe(data => {

      });

    }

  }

}
