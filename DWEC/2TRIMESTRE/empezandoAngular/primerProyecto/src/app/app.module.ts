import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './vista/menu/menu.component';
import { PublicacionComponent } from './vista/publicacion/publicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
