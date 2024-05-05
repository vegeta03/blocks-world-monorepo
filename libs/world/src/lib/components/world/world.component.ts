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
  column1: string[] = ['A1', 'A2'].reverse();
  column2: string[] = ['B1', 'B2'].reverse();
  column3: string[] = [].reverse();
  column4: string[] = [].reverse();

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
