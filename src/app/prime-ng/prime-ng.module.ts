import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';


//usamos un módulo personalizado para incluir aquí todos los módulos de Prime NG que vayamos a utilizar
//de esta forma, no añadimos todo en el app module, y el código queda más limpio
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
