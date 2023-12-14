import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//configuración del locale de la app (idiomas principalmente)
import localES from '@angular/common/locales/es';
import localFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localES);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,

    SharedModule
  ],
  providers: [  //servicios
    {
      provide: LOCALE_ID, useValue:'es' //para cambiar el idioma local en toda la app
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
