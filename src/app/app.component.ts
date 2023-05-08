import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { delay, expand, fromEvent, map, of, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const clicks = fromEvent(document, 'click');
    const powersOfTwo = clicks.pipe(
      map(() => 1),
      expand(x => of(2 * x).pipe(delay(1000))),
      take(10)
    );
    powersOfTwo.subscribe(x => console.log(x));
  }
}
