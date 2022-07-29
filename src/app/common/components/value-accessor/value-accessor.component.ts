import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-value-accessor',
  template: '',
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValueAccessorComponent),
      multi: true
  }]
})
export class ValueAccessorComponent {

  protected onChange = (value: any) => {};
  protected onTouched = () => {};
  protected _value!: any;

  public get value(){
    return this._value;
  }

  public set value(v){
    this._value = v;
    this.onChange(this._value);
    this.onTouched();
  }

  constructor() { }
  writeValue(value: any) {
    console.log('value', value);
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange  = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}
