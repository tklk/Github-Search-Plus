import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesDisplayComponent } from './codes-display.component';

describe('CodesDisplayComponent', () => {
  let component: CodesDisplayComponent;
  let fixture: ComponentFixture<CodesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
