import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true
  public searchString = ""

  constructor(public TodosService: TodosService) { }

  ngOnInit(): void {
    this.TodosService.fetchTodos().subscribe(() => {
      this.loading = false
    })
  }

  completeTodoHandler(id: number) {
    this.TodosService.completeTodo(id)
  }

  removeTodoHandler(id: number) {
    this.TodosService.removeTodo(id)
  }
}
