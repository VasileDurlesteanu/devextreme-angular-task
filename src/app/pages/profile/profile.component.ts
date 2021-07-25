import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 8,
      FirstName: 'Vasile',
      LastName: 'Durlesteanu',
      Prefix: 'Mr.',
      Position: 'Angular Developer Intern',
      BirthDate: new Date('1994/02/28'),
      HireDate: new Date('2021/26/07'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Vasile is an intern at © Code Factory Group. He has a strong passion for Web Development and is ready to make a career shift with the step in the right direction. He is a result-oriented professional with proven time-management, strong work ethic, an outside-the-box vision, and a high sense of responsibility, nurtured by teamwork spirit.',
      Address: 'Rose Valley Street, Chisinau, MD'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
