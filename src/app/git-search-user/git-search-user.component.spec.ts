import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchUserComponent } from './git-search-user.component';

describe('GitSearchUserComponent', () => {
  let component: GitSearchUserComponent;
  let fixture: ComponentFixture<GitSearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
