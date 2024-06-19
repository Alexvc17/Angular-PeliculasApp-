//Aqui vamos a tener el tipado de nuestras peticiones http
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    StarRatingComponent,
    CastSlideshowComponent
  ],
  //para exportarlo en el app .html
  exports:[
    NavbarComponent,
    //este modulo lo voy a ocupar en las paginas y por eso lo exporto
    SlideshowComponent,
    PeliculasPosterGridComponent,
    StarRatingComponent,
    CastSlideshowComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }
