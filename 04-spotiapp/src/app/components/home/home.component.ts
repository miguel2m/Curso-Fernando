import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  //paises: any [] = [];
  constructor(
    private spotify: SpotifyService
    //private http: HttpClient
  ) { 
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((resp: any) => {
      this.paises = resp;
    });*/
    this.spotify.getNewReleases();
    console.log("object");
  }

  ngOnInit() {
  }

}
