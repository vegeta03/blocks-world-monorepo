import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';

import { transferArrayItemToStack } from '@blocks-world-monorepo/utils';

@Component({
  selector: 'lib-world',
  standalone: true,
  imports: [CommonModule, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss',
})
export class WorldComponent {
  column1: string[] = ['A'];
  column2: string[] = ['B'];
  column3: string[] = ['C'];
  column4: string[] = ['D'];

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
