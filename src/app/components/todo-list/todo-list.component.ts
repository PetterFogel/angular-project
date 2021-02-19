import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoList: Array<string> = [];
// todo: string = "";

  constructor() { }
  
  ngOnInit(): void {

  }

  addTodo(value: string[]) {
    this.todoList = value;
    console.log(this.todoList)
  }

}
