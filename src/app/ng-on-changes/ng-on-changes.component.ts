import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnInit {
  @Input("name") name: string ="";
  //declare an array of changes
  changes: Array<string> = [""];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange) {
    this.changes.push(JSON.stringify(changes))
  }

}
