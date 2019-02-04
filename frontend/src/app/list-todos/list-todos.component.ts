import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: 'gh-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  deleteMessage = '';

  constructor(private router: Router, private todoService: TodoDataService) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('dukehh').subscribe(response => {
      this.todos = response;
      console.log('refreshTodos()', JSON.stringify(this.todos, null, 4));
    });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('dukehh', id).subscribe(response => {
      this.deleteMessage = `Delete of ID <${id}> successful!`;
      this.refreshTodos();
    });
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
