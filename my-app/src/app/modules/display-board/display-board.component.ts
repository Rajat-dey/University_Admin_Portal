import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent implements OnInit {

  constructor() { }

  @Input() userCount = 0;   //Component data sharing takes place from here to store the student count
  @Output() getUsersEvent = new EventEmitter();

  ngOnInit(): void {
  }

  getAllUsers() {
    this.getUsersEvent.emit('get all users');
  }

}
