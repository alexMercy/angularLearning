import {Component, Input} from '@angular/core';
import {CdkDragDrop, transferArrayItem, moveItemInArray} from '@angular/cdk/drag-drop';
import {Task} from "../task/task.component";


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {

  @Input() tasks:Task[] = [
    {
      id: '1',
      title: 'ДЗ',
    },
    {
      id: '2',
      title: 'Практика',
    },
    {
      id: '3',
      title: 'Курсач',
      description: "Описание"
    },
  ];
  drop(event: CdkDragDrop<Task[]>) {
    const {currentIndex, previousIndex, container, previousContainer} = event;
    event.previousContainer === event.container
    ? moveItemInArray(container.data, previousIndex, currentIndex)
    : transferArrayItem(previousContainer.data,container.data,previousIndex,currentIndex);
  }
}
