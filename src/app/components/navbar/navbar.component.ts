import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent {

  constructor(private router: Router){}



buscarPelicula(texto:string){

  texto = texto.trim();

  if(texto.length == 0){
      return;
  }

  this.router.navigate(['/buscar',texto]);

}

}
