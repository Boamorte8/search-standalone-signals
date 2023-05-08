import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-display-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h3>From Display Text component:</h3>
      <p>Searching (only text): {{ text }}</p>
      <p>State from service: {{ service.search() }}</p>
    </div>
  `,
  styleUrls: ['./display-text.component.css']
})
export class DisplayTextComponent {
  @Input({ required: true }) text!: string;

  service = inject(StateService);
}
