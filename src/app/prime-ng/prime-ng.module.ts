import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';



//usamos un módulo personalizado para incluir aquí todos los módulos de Prime NG que vayamos a utilizar
//de esta forma, no añadimos todo en el app module, y el código queda más limpio
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    //MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule

  ]
})
export class PrimeNgModule { }
