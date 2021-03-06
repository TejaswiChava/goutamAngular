import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveComponent } from './drive.component';

describe('DriveComponent', () => {
  let component: DriveComponent;
  let fixture: ComponentFixture<DriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
