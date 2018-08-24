import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesNewwireComponent } from './times-newwire.component';

describe('TimesNewwireComponent', () => {
  let component: TimesNewwireComponent;
  let fixture: ComponentFixture<TimesNewwireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesNewwireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesNewwireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
