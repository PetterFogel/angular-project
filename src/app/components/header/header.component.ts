import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Todo-Today";
  subTitle = "What will you do today?";

  constructor() { }

  ngOnInit(): void {
  }

}
