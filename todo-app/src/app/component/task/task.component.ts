import {Component, Input} from '@angular/core';

export interface Task {
  id: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() id = "";
  @Input() title = "";




}
