import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name:string = 'Fresno';
  public gender: 'male' | 'female' | 'nb' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
    'nb': 'invitarle'
  }

  changeClient(): void {
    this.name = 'Fernando';
    this.gender = 'male';
  }

  //i18nPlural
  public clients: string[] = ['María', 'Laura', 'Javier', 'Aurora', 'Fernando', 'Pedro'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes espernado' //el caracter # simboliza un número
  }

  deleteClient():void {
    this.clients.shift();
  }

  //kay value Pipe
  public person = {
    name: 'Fresno',
    age: '22',
    address: 'Madrid'
  }

  //async pipe
  public myObservableTimer: Observable<number> = interval(1000) //crea un observable que emite valores cada cierto tiempo (argumento)
    .pipe(
      //tap(() => console.log('tap', value))
    );

    public promiseValue:Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Temenos información en la promesa. ')
      }, 3500);
    });
}
