import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoList: Array<string> = [];
todo: string = "";

  constructor() { }
  
  ngOnInit(): void {

  }

  addTodo(inputValue: string) {
    this.todo = inputValue;
    this.todoList.push(this.todo);
    console.log(this.todoList);
  }

}
