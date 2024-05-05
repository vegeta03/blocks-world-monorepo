import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldComponent } from '@blocks-world-monorepo/world';
import { QueryWindowComponent } from '@blocks-world-monorepo/query-window';

@Component({
  selector: 'lib-user-interface',
  standalone: true,
  imports: [CommonModule, WorldComponent, QueryWindowComponent],
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.scss',
})
export class UserInterfaceComponent {}
