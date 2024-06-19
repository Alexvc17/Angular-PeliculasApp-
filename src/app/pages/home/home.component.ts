import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];



//ESTE ES EL DECORADOR DE UNA FUNCION
@HostListener('window:scroll',['$event'])
//Este metodo se va a disparar cuando se haga scroll
onScroll(){



                                                  //por si aparece undefined
  const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
  const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

  if (pos > max){

    //si esta cargando se sale de una ves y no hace nada mas
    if (this.peliculasService.cargando){
      return;
    }

    //TODO llamar el servicio para que se dispare tengo que hacer el .subscribe
    this.peliculasService.getCartelera().subscribe(movies =>{

      //insertamos con un push de lo que recibimos en la respuesta y extraemos con el operador spread lo que esta en la reespuesta
      // ... y hacemos un push al arreglo
      this.movies.push(...movies);
    })
  }

}

constructor(private peliculasService: PeliculasService){}

//para consumir ese servicio hacemos esto
  ngOnInit():void {

     this.peliculasService.getCartelera()
        .subscribe(movies=>{
          //console.log(resp.results);
          this.movies = movies;
          this.moviesSlideshow = movies
        })

  }

  ngOnDestroy(): void {
    //esto se ejecuta cuando el componente va a ser destruido
    this.peliculasService.resetCarteleraPage();


  }

}
