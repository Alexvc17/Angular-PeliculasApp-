import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string): string {
    //si la imagen esta disponible la regreso o sino la regreso con la no image
    if(poster){
      return `https://image.tmdb.org/t/p/w500${poster}`;
    }else{
      return './assets/no-image.jpg'
    }

    //https://image.tmdb.org/t/p/w500{{movie.poster_path}}
    console.log(poster);
    return poster;
  }

}
