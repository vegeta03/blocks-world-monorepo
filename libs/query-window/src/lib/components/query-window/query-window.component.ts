import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UserMessageComponent } from '../user-message/user-message.component';
import { SystemMessageComponent } from '../system-message/system-message.component';

@Component({
  selector: 'lib-query-window',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    UserMessageComponent,
    SystemMessageComponent,
  ],
  templateUrl: './query-window.component.html',
  styleUrl: './query-window.component.scss',
})
export class QueryWindowComponent implements AfterViewInit {
  @ViewChild('queryWindow', { static: true }) queryWindow!: ElementRef;

  ngAfterViewInit(): void {
    try {
      this.queryWindow.nativeElement.scrollTop =
        this.queryWindow.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling:', err);
    }
  }
}
