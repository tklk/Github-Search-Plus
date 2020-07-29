import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Module collection
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Service
import { GitSearchRepoService } from './Service/git-search-repo.service';
import { GitSearchUserService } from './Service/git-search-user.service';
import { GitSearchCodeService } from './Service/git-search-code.service';
import { UnifiedSearchService } from './Service/unified-search.service';
// Component
import { GitSearchRepoComponent } from './Component/git-search-repo/git-search-repo.component';
import { GitSearchUserComponent } from './Component/git-search-user/git-search-user.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ReposDisplayComponent } from './Advanced-Component/repos-display/repos-display.component';
import { CodesDisplayComponent } from './Advanced-Component/codes-display/codes-display.component';


@NgModule({
  declarations: [
    AppComponent,
    GitSearchRepoComponent,
    GitSearchUserComponent,
    HomepageComponent,
    NotFoundComponent,
    ReposDisplayComponent,
    CodesDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    GitSearchRepoService, 
    GitSearchUserService, 
    GitSearchCodeService,
    UnifiedSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
