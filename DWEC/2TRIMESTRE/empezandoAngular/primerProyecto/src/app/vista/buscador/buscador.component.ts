import { Component, ViewChild, ElementRef } from '@angular/core'; 
@Component({ 
  selector: 'app-buscador', 
  templateUrl: './buscador.component.html', 
  styleUrls: ['./buscador.component.css'], 
}) 
export class BuscadorComponent {  
  //https://angular.io/api/core/ViewChild
  //https://angular.io/api/core/ElementRef
  //https://angular.io/guide/binding-syntax
  @ViewChild('bindingInput') bindingInput!: ElementRef;
  public buscar(): void {
    console.log('HTML attribute value: ' + this.bindingInput.nativeElement.getAttribute('value'));
    console.log('DOM property value: ' + this.bindingInput.nativeElement.value);
  } 
}