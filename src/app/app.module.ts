import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudUsuarioComponent } from './crud-usuario/crud-usuario.component';
import { CrudVehiculosComponent } from './crud-vehiculos/crud-vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudUsuarioComponent,
    CrudVehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
