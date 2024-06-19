import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',

})
export class BuscarComponent {

  public movies: Movie[]=[];
  public textoBuscado : string = "";

  //uso activated route para obtener los valores del url
  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{

      this.textoBuscado = params['texto'];

      this.peliculasService.buscarPeliculas(params['texto'])
        .subscribe(movies=>{
          console.log(movies[0].title);
          this.movies = movies;
        })
    })

  }

}
