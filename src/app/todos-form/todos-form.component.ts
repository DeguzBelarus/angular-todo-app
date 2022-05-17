import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss']
})
export class TodosFormComponent implements OnInit {

  title: string = ""

  constructor(private TodosService: TodosService) { }

  ngOnInit(): void {
  }

  addTodoHandler() {
    if (this.title === "") return

    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }

    this.TodosService.addTodo(todo)

    this.title = ""
  }
}
