import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {

  constructor() { }

  name: string = "Tiia";

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}
