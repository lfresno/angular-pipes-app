import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'fresno';
  public nameUpper: string = 'FRESNO';
  public fullName: string = 'luCÍa FREsNo';

  public customDate: Date = new Date();

}
