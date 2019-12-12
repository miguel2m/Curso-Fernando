import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo.... Esta es una etiqueta html
    </p>

    <button class="btn btn-primary" (click)="tamano= tamano +5">
        <i class="fa fa-plus"></i>
    </button>
    
    <button class="btn btn-primary" (click)="tamano= tamano -5">
        <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
    `p{
      color:red;
      font-size: 20px;  
    }`
  ]
})
export class CssComponent implements OnInit {
  tamano:number =0;
  constructor() { }

  ngOnInit() {
  }

}
