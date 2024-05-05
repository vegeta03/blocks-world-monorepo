import { Component } from '@angular/core';

import { UserInterfaceComponent } from '@blocks-world-monorepo/user-interface';

@Component({
  standalone: true,
  imports: [UserInterfaceComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blocks-world';
}
