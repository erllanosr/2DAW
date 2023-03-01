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
  public permiso: boolean;
  public listado: Datos[];
  public rutaImagen: string;

  constructor() {
    this.saludo = 'Hola mundo';
    this.permiso = false;
    this.rutaImagen = "https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg";
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
    // ver longitud saludo
    if (this.saludo.length > 3) {
      console.log("MAYOR A 3")
    } else {

    }

  }
  public borrar(id:number): void {
    delete this.listado[id];
  }
  public buscar(): void {
    console.log('HTML attribute value: ' + this.bindingInput.nativeElement.getAttribute('value'));
    console.log('DOM property value: ' + this.bindingInput.nativeElement.value);

    if (this.bindingInput.nativeElement.value === this.listado.find(this.bindingInput.nativeElement.value)){
      console.log("lkajsda");
    }
  }
}
