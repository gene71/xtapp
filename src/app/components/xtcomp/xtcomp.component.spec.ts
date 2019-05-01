import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtcompComponent } from './xtcomp.component';

describe('XtcompComponent', () => {
  let component: XtcompComponent;
  let fixture: ComponentFixture<XtcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
