import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchTopicComponent } from './git-search-topic/git-search-topic.component';
import { GitSearchUserComponent } from './git-search-user/git-search-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '',
    component: HomepageComponent
  },
  { path: 'search-topic',
    redirectTo: '/search-topic/angular',
    pathMatch: 'full'
  },
  { path: 'search-topic/:query',
    component: GitSearchTopicComponent,
    data: {
      title: 'Git Search Topic'
    }
  },
  { path: 'search-user',  
  redirectTo: '/search-user/kevin',
  pathMatch: 'full'
  },
  { path: 'search-user/:query',  
    component: GitSearchUserComponent,
    data: {
      title: 'Git Search User'
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
