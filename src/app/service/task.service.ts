import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private data: string[];

  constructor() {
    this.data = [];
  }

  getTask(): string[] {
    return this.data;
  }

  addTask(task: string) {
    this.data.push(task);
  }
}
