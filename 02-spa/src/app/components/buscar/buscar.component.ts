import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit{

  heroes:any = []
  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroeService,
               private router:Router
    ) {
    
   }
  
  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.heroes= this._heroesService.buscarHeroes(params['termino']);
    })
  }

   verHeroe (idx:number){
    console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }
}
