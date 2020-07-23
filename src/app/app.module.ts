import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GitSearchUserService } from './git-search-user.service';
import { GitSearchTopicService } from './git-search-topic.service';

import { GitSearchTopicComponent } from './git-search-topic/git-search-topic.component';
import { GitSearchUserComponent } from './git-search-user/git-search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchTopicComponent,
    GitSearchUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [GitSearchTopicService, GitSearchUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
