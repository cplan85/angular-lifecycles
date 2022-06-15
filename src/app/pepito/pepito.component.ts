import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pepito',
  templateUrl: './pepito.component.html',
  styleUrls: ['./pepito.component.css']
})
export class PepitoComponent implements OnInit {
  logs: Array<string> = [new Date() + ""]
  constructor() {
    for(let i=0; i<100; i++) {
      console.log(i);
    }
   }

  ngOnInit(): void {
    this.logs.push(new Date() + "" )
  }

}
