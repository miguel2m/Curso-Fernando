import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  

  constructor(
    private http: HttpClient
  ) { console.log("Spoti ready");}

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBVJYRs-bLum8v9gBJasgfnrC7SicUIvNQttAlB_0CMrv6_0s3Dr455TrfLLeyq1OxxGYqp9sdnI3JIVY8'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    .subscribe( data => {
      console.log(data );
    });
  }
}

