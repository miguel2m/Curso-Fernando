import { Component } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="Miguel";
  arreglo =[1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  heroe ={
    nombre: "Logan",
    clave:"Wolverine",
    edad:500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  }

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout( ()=> resolve('Llego la data'),3500);
  });


  fecha = new Date();

  video = "VwbkSC2WZ_g";
}
