import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasFrameComponent } from './canvas-frame.component';

describe('CanvasFrameComponent', () => {
  let component: CanvasFrameComponent;
  let fixture: ComponentFixture<CanvasFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
