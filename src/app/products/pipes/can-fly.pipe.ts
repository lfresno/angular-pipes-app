import { Pipe, PipeTransform } from '@angular/core';


//si canFly es true saca 'Vuela', si no, 'No vuela'

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {


  transform(value: boolean): 'Vuela' | 'No vuela' {
    return (value) ? 'Vuela': 'No vuela';
  }

}
