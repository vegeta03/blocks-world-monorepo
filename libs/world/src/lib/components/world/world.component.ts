import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';

import {
  IsLastItemPipe,
  transferArrayItemToStack,
} from '@blocks-world-monorepo/utils';

@Component({
  selector: 'lib-world',
  standalone: true,
  imports: [
    CommonModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    IsLastItemPipe,
  ],
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss',
})
export class WorldComponent {
  column1: string[] = ['A1', 'A2', 'A3'].reverse();
  column2: string[] = ['B1'].reverse();
  column3: string[] = ['C1', 'C2'].reverse();
  column4: string[] = ['D1', 'D2', 'D3', 'D4'].reverse();

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItemToStack(
        event.previousContainer.data,
        event.container.data,
        event.currentIndex
      );
    }
  }
}
