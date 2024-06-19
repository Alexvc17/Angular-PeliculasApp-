import { AfterContentInit, Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']

})

//control .  e implementamos esa interfaz
export class SlideshowComponent{

  private swiper!:Swiper;

  //para recibir una propiedad del componente padre usamos Input
  @Input() movies: Movie[] = [];

  constructor(){}


  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      loop: true,
    });


  }



  ngOnInit(): void {

  }

  onSlideNext(){
  this.swiper.slideNext();
  }
  onSlidePrev(){
  this.swiper.slidePrev();
  }

}
