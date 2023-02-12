import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/modelo/datos';

@Component({
  selector: 'app-menu', templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {
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
    this.saludo = "esa genteeee";
  }

  public cambio(): void {
    this.saludo = "que pasaaaa";
  }
  public borrar(id:number): void {
    delete this.listado[id];
  }
}
