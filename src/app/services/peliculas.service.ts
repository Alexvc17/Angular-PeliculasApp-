import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//of funcion para generar observables
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-responde';

//este providein hace que se importe de manera globlal
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl = "https://api.themoviedb.org/3";
  public carteleraPage = 1;
  public cargando: boolean = false;


  constructor(private http: HttpClient) { }
//voy a obtener los getters
  get params(){
    return{

      language: 'es-ES',
      page: this.carteleraPage,
      api_key:'710eb4083bf34e6f19aeb441a2e6e01c',
    }
  }

  //este va a recibir un observable que va a resolver algo de CarteleraResponse
  getCartelera():Observable<Movie[]>{
    if(this.cargando){
      //creamos el retorno de un observable de la siguiente manera
      return of ([]);
    }
    //despues del get va el endopint o URL y le decimos que el get retorna CarteleraResponse
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{params:this.params})
            .pipe(
              map((resp) => resp.results),
              tap( ()=>{
              //tap se ejecuta cada que se emite un valor
              //cada que cartelera response emita un valor incrementa cartelera en 1
              this.carteleraPage +=1;
              this.cargando = false;
            }))
    }

  //regresare un observable que emite movie como arreglo
  buscarPeliculas(texto: string):Observable<Movie[]>{
    //lo desestructuramos y cambiamos el page por 1
    const params = {...this.params,page: '1', query:texto}

    //aqui va a obtener una respuesta de tipo cartelera response
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{params})
    .pipe(
      map(resp=>resp.results)
    )


  }


  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getPeliculaDetalle(id:string){

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`,{params: this.params}
    ).pipe(
      catchError(err=>of(null))
      )
  }

  //retornara un observable que emitira un cast como arreglo
  getCast(id:string):  Observable<Cast[]>{
    //solo me interesa retornar el casting entonces agrego un pipe
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`,{params: this.params})
    .pipe(
      map(resp => resp?.cast),
      catchError(err=>of([]))
      );
  }

}
