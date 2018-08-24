import { Routes, RouterModule } from '@angular/router';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { TimesTagsComponent } from './times-tags/times-tags.component';
import { TimesNewwireComponent } from './times-newwire/times-newwire.component';
import { SemanticComponent } from './semantic/semantic.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { GeographicComponent } from './geographic/geographic.component';
import { CommunityComponent } from './community/community.component';
import { BooksComponent } from './books/books.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { ArchiveComponent } from './archive/archive.component';

const NYTRoutes: Routes = [
    {path: 'topstories', component: TopStoriesComponent},
    {path: 'timestags', component: TimesTagsComponent},
    {path: 'timesnewwire', component: TimesNewwireComponent},
    {path: 'semantic', component: SemanticComponent},
    {path: 'moviereview', component: MovieReviewComponent},
    {path: 'mostpopular', component: MostPopularComponent},
    {path: 'geographic', component: GeographicComponent},
    {path: 'community', component: CommunityComponent},
    {path: 'books', component: BooksComponent},
    {path: 'articlesearch', component: ArticleSearchComponent},
    {path: 'archive', component: ArchiveComponent},
    {path: '', pathMatch: 'full', redirectTo: 'topstories'}
];

export const NYTRouting = RouterModule.forRoot(NYTRoutes);
