import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-varios',
  templateUrl: './varios.component.html',
  styleUrls: ['./varios.component.css']
})
export class VariosComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("Constructor");
   }

  ngOnInit(): void {
    console.log("On Init");
  }
  
  ngDoCheck() {
    console.log("Do check");
  }

  ngAfterContentInit(): void {
    console.log("After content Init")
  }

  ngAfterContentChecked(): void {
    console.log("After Content Checked");
  }

  ngAfterViewInit(): void {
    console.log("After View Init");
  }

  ngAfterViewChecked(): void {
    console.log("After View Checked");
  }
  
  ngOnDestroy(): void {
    console.log("OnDestroy");
  }
}
