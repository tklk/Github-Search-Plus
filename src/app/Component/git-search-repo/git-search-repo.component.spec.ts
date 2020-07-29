import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchRepoComponent } from './git-search-repo.component';

describe('GitSearchRepoComponent', () => {
  let component: GitSearchRepoComponent;
  let fixture: ComponentFixture<GitSearchRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
