import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h3>From Display component:</h3>
      <p>Searching: {{ text() }}</p>
    </div>
  `,
  styleUrls: ['./display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent {
  @Input({ required: true })
  text!: WritableSignal<string>;
}
