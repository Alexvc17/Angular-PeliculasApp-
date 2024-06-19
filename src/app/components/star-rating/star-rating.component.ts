import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  //numero de estrellas
  @Input() stars! :number;

  //tamaño de estrellas
  @Input() size:number = 1;

  //me retorna un valor que tiene el tamaño de la estrella, su margen
  get styles(){
    return{
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    }
  }


  getStarImage(current: number): string {
    const roundedStars = Math.floor(this.stars); // Obtener la parte entera del rating
    const remainingStars = this.stars - roundedStars; // Obtener la parte fraccionaria

    const imageName =
      roundedStars >= current
        ? 'star-full'
        : roundedStars === current - 1 && remainingStars > 0
        ? 'star-half'
        : 'star-empty';

    return `/assets/stars/${imageName}.svg`;
  }


}
