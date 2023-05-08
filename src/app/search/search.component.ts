import { CommonModule } from '@angular/common';
import { Component, Signal, WritableSignal, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from '../display/display.component';
import { StateService } from '../state.service';
import { DisplayTextComponent } from './../display-text/display-text.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, DisplayComponent, DisplayTextComponent],
  template: `
    <div class="max-w-sm m-auto">
      <header class="py-4 text-center">
        <h1 class="text-3xl font-bold underline">
          Search Vegetables
        </h1>
      </header>
      <app-display [text]="search" />
      <app-display-text [text]="search()" />

      <main class="flex flex-col items-center">
        <input type="text" [ngModel]="search()" (ngModelChange)="onSearch($event)" placeholder="Search" class="my-4" />
        <ul *ngIf="filteredItems().length">
          <li *ngFor="let item of filteredItems()">{{ item }}</li>
        </ul>
        <h2 *ngIf="!filteredItems().length">There aren't item right now</h2>
      </main>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: WritableSignal<string> = signal('');
  service = inject(StateService);

  items = [
    'Apple',
    'Avocado',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cherry',
    'Durian',
    'Elderberry',
    'Mango',
    'Pasion fruit',
    'Potato',
    'Tomato',

  ];

  filteredItems: Signal<string[]> = computed(() => this.items.filter((item) =>
    item.toLowerCase().includes(this.search().toLowerCase())
  ));

  constructor() {
    effect(() => {
      console.log(`The search is: ${this.search()}`);
    });
  }

  onSearch(value: string) {
    this.search.set(value);
    this.service.search.set(value);
  }
}
