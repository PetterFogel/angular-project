import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
inputValue = "";
@Output() buttonClicked = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  getValue(val: any) {
    this.inputValue = val.target.value;
  }

  fetchInputValue() {
    this.buttonClicked.emit(this.inputValue);
  }
}
