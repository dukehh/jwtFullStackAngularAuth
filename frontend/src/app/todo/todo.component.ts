import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  name: string;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    this.name = 'dukehh';

    if (this.id != -1) {
      this.todoService
        .retrieveTodoById(this.name, this.id)
        .subscribe(response => {
          this.todo = response;
        });
    }
  }

  updateTodo() {
    if (this.id == -1) {
      this.createTodo();
    } else {
      this.todoService
        .updateTodo(this.name, this.id, this.todo)
        .subscribe(response => this.router.navigate(['todos']));
    }
  }

  createTodo() {
    this.todo.id = -1;
    this.todoService.createTodo(this.name, this.todo).subscribe(response => {
      this.router.navigate(['todos']);
    });
  }

  cancel() {
    this.router.navigate(['todos']);
  }
}
