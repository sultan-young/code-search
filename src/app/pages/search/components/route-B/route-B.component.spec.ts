/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouteBComponent } from './route-B.component';

describe('RouteBComponent', () => {
  let component: RouteBComponent;
  let fixture: ComponentFixture<RouteBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
