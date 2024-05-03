import { Component } from '@angular/core';

import { WorldComponent } from '@blocks-world-monorepo/world';

@Component({
  standalone: true,
  imports: [WorldComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blocks-world';
}
