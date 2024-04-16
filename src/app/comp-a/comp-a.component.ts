import { Component, inject } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-comp-a',
  standalone: true,
  imports: [],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css',
})
export class CompAComponent {
  public _task: TaskService = inject(TaskService);
}
