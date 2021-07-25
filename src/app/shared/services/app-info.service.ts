import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'My Code Factory Project';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
