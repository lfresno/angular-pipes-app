import { Pipe, PipeTransform } from "@angular/core";

//fernando | toggleCase = 'FERNANDO'
//FERNANDO | toggleCase = 'fernando'

@Pipe({
  name:'toggleCase' //nombre para poder usarlo en el html
})
export class ToggleCasePipe implements PipeTransform{

  //especificamos el tipo de dato que puede transformar este dato y sus posibles argumentos
  transform(value: string, toUpper:boolean = false): string {

    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
