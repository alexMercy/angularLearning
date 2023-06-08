import { Component } from '@angular/core';
import {Task} from "../task/task.component";

export interface Column {
  title: string,
  tasks: Task[]
}

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent {
  data:Column[] = [
    {
      title: 'Todo',
      tasks: [
        {
          id: '1',
          title: 'ДЗ',
        },
        {
          id: '2',
          title: 'Практика',
        },
      ]
    },
    {
      title: 'Done',
      tasks: [
        {
          id: '3',
          title: 'Курсач',
          description: "Описание"
        },
        {
          id: '4',
          title: 'Просто 4',
          description: "Описание 4"
        },
      ]
    },

  ]
}
