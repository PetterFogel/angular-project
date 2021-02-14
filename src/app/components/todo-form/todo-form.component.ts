import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
inputValue: string = "";
todoList: Array<string>  = [];
todos: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  getValue(val: any) {
    this.inputValue = val.target.value
  }

  addTodo(inputValue: string) {
    console.log(inputValue);
    this.todos = inputValue;

    this.todoList.push(this.todos);
    console.log(this.todoList);
  }
}
