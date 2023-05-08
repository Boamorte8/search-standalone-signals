import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  search: WritableSignal<string> = signal('State from Service');

  constructor() { }
}
