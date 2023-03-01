import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Jugadores } from 'src/app/modelo/Jugadores';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @ViewChild('bindingInput') bindingInput!: ElementRef;
  @ViewChild('dorsalPlayer') dorsalPlayer!: ElementRef;
  @ViewChild('namePlayer') namePlayer!: ElementRef;

  public jugadores: Jugadores[];
  constructor () {
    this.jugadores = [
    {
      jugador: 'Kanye',
      dorsal: 19,
    },
    {
      jugador: 'Pedro',
      dorsal: 1,
    },
    {
      jugador: 'Pablo',
      dorsal: 10,
    },
  ];
  }

  // Usar {{}} <- del ts al html
  // [] <- del ts al html, es sobre un atributo del html. Unidireccional html -> TS
  // () <- Reacciona el html, comunica el html al CSS. Unidireccional html -> TS
  public guardar(): void {
    this.jugadores.push(this.namePlayer.nativeElement.value + this.dorsalPlayer.nativeElement.value );

    console.log(this.namePlayer.nativeElement.value);
    console.log(this.dorsalPlayer.nativeElement.value);

  }
  public buscar(): void {
    console.log('HTML attribute value: ' + this.bindingInput.nativeElement.getAttribute('value'));
    console.log('DOM property value: ' + this.bindingInput.nativeElement.value);

    if (this.bindingInput.nativeElement.value == this.jugadores.find(this.namePlayer.nativeElement.value)) {
      console.log("lkajsda");
    }
  }
}
