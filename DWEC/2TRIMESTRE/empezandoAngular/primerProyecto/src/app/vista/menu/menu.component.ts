import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Datos } from 'src/app/modelo/datos';
import { BuscadorComponent } from '../buscador/buscador.component';


@Component({
  selector: 'app-menu', templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {
  @ViewChild('bindingInput') bindingInput!: ElementRef;
  // Atributos
  public saludo: string;
  public listado: Datos[];

  constructor() {
    this.saludo = 'Hola mundo';
    this.listado = [
      { id: 1, nombre: 'Águila' },
      { id: 2, nombre: 'Leones' },
      { id: 3, nombre: 'Ornitorrincos' }
    ];
  }

  ngOnInit(): void {
    this.saludo = "SALUDO 1";
  }

  public cambio(): void {
    this.saludo = "SALUDO 2";
  }
  public borrar(id:number): void {
    delete this.listado[id];
  }
  public buscar(): void {
    console.log('HTML attribute value: ' + this.bindingInput.nativeElement.getAttribute('value'));
    console.log('DOM property value: ' + this.bindingInput.nativeElement.value);

    if (this.bindingInput.nativeElement.value == this.listado.find(nombre)){
      console.log("lkajsda");
    }
  }
}
