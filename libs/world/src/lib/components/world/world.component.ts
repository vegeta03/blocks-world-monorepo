import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'lib-world',
  standalone: true,
  imports: [CommonModule, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss',
})
export class WorldComponent {
  column1: string[] = [];
  column2: string[] = [];
  column3: string[] = [];
  column4: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
