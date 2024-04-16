import { Component, inject } from '@angular/core';
import { TaskService } from '../service/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-b',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css',
})
export class CompBComponent {
  public _task: TaskService = inject(TaskService);
}
