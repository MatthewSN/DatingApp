/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyValueComponent } from './my-value.component';

describe('MyValueComponent', () => {
  let component: MyValueComponent;
  let fixture: ComponentFixture<MyValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
