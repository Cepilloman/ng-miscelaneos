import { Component,
  OnInit, OnChanges, DoCheck,OnDestroy,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <app-clases></app-clases>

    <p [appResaltado]="'gray'" > Hola mundo </p>

    <app-ng-switch></app-ng-switch>
  `
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,OnDestroy,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked  {

  constructor() {
    console.log("Constructor - 1");
  }

  ngOnInit() {
    console.log("OnInit - 2");
  }

  ngOnChanges(){
    console.log("OnChanges - 3");
  }

  ngDoCheck(){
    console.log("DoCheck - 4");
  }

  ngOnDestroy(){
    console.log("OnDestroy - 5");
  }

  ngAfterContentInit(){
    console.log("AfterContentInit - 6");
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked - 7");
  }

  ngAfterViewInit(){
    console.log("AfterViewInit - 8");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked - 9");
  }

}
