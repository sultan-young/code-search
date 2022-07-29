import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorComponent } from '../value-accessor/value-accessor.component';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchInputComponent),
    multi: true
}]
})
export class SearchInputComponent extends ValueAccessorComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
    
  }



}
