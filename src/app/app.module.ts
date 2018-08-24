import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { AppComponent } from './app.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { BooksComponent } from './books/books.component';
import { CommunityComponent } from './community/community.component';
import { GeographicComponent } from './geographic/geographic.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { SemanticComponent } from './semantic/semantic.component';
import { TimesNewwireComponent } from './times-newwire/times-newwire.component';
import { TimesTagsComponent } from './times-tags/times-tags.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { NYTRouting } from './app.routes';
import { NYTService } from './services/NYTService';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveComponent,
    ArticleSearchComponent,
    BooksComponent,
    CommunityComponent,
    GeographicComponent,
    MostPopularComponent,
    MovieReviewComponent,
    SemanticComponent,
    TimesNewwireComponent,
    TimesTagsComponent,
    TopStoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    MalihuScrollbarModule.forRoot(),
    NYTRouting
  ],
  providers: [
    NYTService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
