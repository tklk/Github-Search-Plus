import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Module collection
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Service
import { GitSearchUserService } from './git-search-user.service';
import { GitSearchTopicService } from './git-search-topic.service';
// Component
import { GitSearchTopicComponent } from './git-search-topic/git-search-topic.component';
import { GitSearchUserComponent } from './git-search-user/git-search-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    GitSearchTopicComponent,
    GitSearchUserComponent,
    HomepageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GitSearchTopicService, GitSearchUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
