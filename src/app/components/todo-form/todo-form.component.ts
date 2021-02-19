import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
todoList: Array<string> = [];
inputValue: string = "";
@Output() buttonClicked = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  getValue(val: any) {
    this.inputValue = val.target.value;
  }
  
  fetchInputValue() {
    this.todoList.push(this.inputValue);
    this.buttonClicked.emit(this.todoList);
  }
}
