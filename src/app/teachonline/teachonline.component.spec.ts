import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachonlineComponent } from './teachonline.component';

describe('TeachonlineComponent', () => {
  let component: TeachonlineComponent;
  let fixture: ComponentFixture<TeachonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachonlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
