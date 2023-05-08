import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Searching (only text): {{ text }}</p>
  `,
  styleUrls: ['./display-text.component.css']
})
export class DisplayTextComponent {
  @Input({ required: true }) text!: string;
}
