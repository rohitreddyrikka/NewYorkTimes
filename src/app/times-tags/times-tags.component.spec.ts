import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesTagsComponent } from './times-tags.component';

describe('TimesTagsComponent', () => {
  let component: TimesTagsComponent;
  let fixture: ComponentFixture<TimesTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
