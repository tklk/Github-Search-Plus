import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchTopicComponent } from './git-search-topic.component';

describe('GitSearchTopicComponent', () => {
  let component: GitSearchTopicComponent;
  let fixture: ComponentFixture<GitSearchTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
