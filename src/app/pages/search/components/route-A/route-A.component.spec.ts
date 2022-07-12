/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouteAComponent } from './route-A.component';

describe('RouteAComponent', () => {
  let component: RouteAComponent;
  let fixture: ComponentFixture<RouteAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
