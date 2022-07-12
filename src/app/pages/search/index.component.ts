import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class SearchComponent implements OnInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  constructor() { 
  }

  ngOnInit() {
   
  }

}
