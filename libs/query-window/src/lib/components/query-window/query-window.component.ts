import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMessageComponent } from '../user-message/user-message.component';
import { SystemMessageComponent } from '../system-message/system-message.component';

@Component({
  selector: 'lib-query-window',
  standalone: true,
  imports: [CommonModule, UserMessageComponent, SystemMessageComponent],
  templateUrl: './query-window.component.html',
  styleUrl: './query-window.component.scss',
})
export class QueryWindowComponent {}
