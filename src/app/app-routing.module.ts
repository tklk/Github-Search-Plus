import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchRepoComponent } from './Component/git-search-repo/git-search-repo.component';
import { GitSearchUserComponent } from './Component/git-search-user/git-search-user.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

const routes: Routes = [
  { path: '',
    component: HomepageComponent
  },
  { path: 'search-repo',
    redirectTo: '/search-repo/angular',
    pathMatch: 'full'
  },
  { path: 'search-repo/:query',
    component: GitSearchRepoComponent,
    data: {
      title: 'Git Search Repositories'
    }
  },
  { path: 'search-user',  
  redirectTo: '/search-user/kevin',
  pathMatch: 'full'
  },
  { path: 'search-user/:query',  
    component: GitSearchUserComponent,
    data: {
      title: 'Git Search Users'
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
