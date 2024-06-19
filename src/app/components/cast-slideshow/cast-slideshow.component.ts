import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-responde';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent {

  private swiper!:Swiper;

  @Input() cast!: Cast[];

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("aray del cast",this.cast);
  }

  ngAfterViewInit(): void {

    this.swiper = new Swiper('.swiper', {
      loop: true,
      //5.3 slides por vista se van a mostrar
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });

  }

}
