import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputValue: any

  constructor() { }

  ngOnInit(): void {
  }

  getValue(val: any) {
    this.inputValue = val.target.value
  }

  test(e: Event) {
    e.preventDefault();
    console.log(this.inputValue);
  }

}
