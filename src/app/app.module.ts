import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/shared/error/error.component';
// Angular Material
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
