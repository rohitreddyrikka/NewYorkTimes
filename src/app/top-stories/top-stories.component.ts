import { Component, OnInit, OnDestroy } from '@angular/core';
import { NYTService } from '../services/NYTService';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit, OnDestroy {
  topStories: JSON;
  topStoriesLoading: boolean;
  constructor(private nyts: NYTService) { }

  ngOnInit() {
    this.nyts.topStories.subscribe((stories) => {
      this.topStories = stories;
    });
    this.nyts.topStoriesLoading.subscribe((flag) => {
      this.topStoriesLoading = flag;
    });
    this.nyts.startFetchTopStories();
  }
  ngOnDestroy() {
    this.nyts.stopFetchTopStories();
  }

}
