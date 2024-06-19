import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';



@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent {

  //aqui recibo las peliculas del componente padre que es el HOME COMPONENT
  @Input() movies: Movie[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  onMovieClick(movie: Movie){

    this.router.navigate(['/pelicula',movie.id]);
  }


}
