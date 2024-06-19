import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-responde';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',

})
export class PeliculaComponent {

  public movie?: MovieResponse | null;
  public cast: Cast[]=[];

  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService,
              private location: Location,
              private router: Router
              ){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    const id = this.activatedRoute.snapshot.params['id'];

    //para combinar observables y emitir uno solo
    combineLatest([
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCast(id)
    ]).subscribe( ([pelicula,cast]) =>{
      console.log(pelicula,cast);
      if(!pelicula){
        // y lo redirecciona al home
        this.router.navigateByUrl('/home')
        return;
      }
      this.movie = pelicula;
      this.cast = cast.filter(actor => actor.profile_path != null);
    })


    /*
        .subscribe(resp=>{
          //si la pelicula no existe saca a la persona de la pantalla
          if(!resp){
            // y lo redirecciona al home
            this.router.navigateByUrl('/home')
            return;
          }
          this.movie = resp;
        })

    //aqui llamo al metodo y le envio el id luego me subscribo a esa respuesta y la imprimo en consola

      .subscribe(resp=>{
        console.log(resp);
        //hacemos un filter de los actores cuyo poster path sea diferente de nulo
        this.cast = resp.filter(actor => actor.profile_path != null);

      })

*/


  }

  //para regresarlo de manera condicional usando el location | me da informacion de la localizacion del usuario
  onRegresar(){
   this.location.back();
  }



}
