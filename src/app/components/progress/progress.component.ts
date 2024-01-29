import { Component,Input, OnInit } from '@angular/core';
export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  
  @Input() cardheight: string = '250px';
  
  todos: { text: string; done: boolean }[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo, done: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleDone(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }
  ngOnInit(): void {
    }
  }