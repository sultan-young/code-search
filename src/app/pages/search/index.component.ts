import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class SearchComponent implements OnInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  searchValue = '';


  constructor(
  ) { 
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchValue = '1000';

    }, 2000);
   
  }

  change() {
    console.log('change', this.searchValue)
  }
}
