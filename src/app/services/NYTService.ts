import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const interval = 60000;
@Injectable()
export class NYTService {
    topStories: EventEmitter<JSON> = new EventEmitter();
    topStoriesAlive = false;
    topStoriesLoading: EventEmitter<boolean> = new EventEmitter();
    constructor(private http: HttpClient) {
    }
    startFetchTopStories() {
        this.topStoriesAlive = true;
        TimerObservable.create(
            0,
            interval
        ).takeWhile(
            () => this.topStoriesAlive
        ).subscribe(() => {
            this.topStoriesLoading.emit(true);
            this.http.get<JSON>(
                'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=SReq4jI9sjDyIvGrSGUliDytJlmQnU94'
            ).subscribe(
                (stories) => {
                    if (stories && stories['status'] && stories['status'] === 'OK') {
                    this.topStories.emit(stories);
                    }
                },
                (err) => {
                    console.log(err);
                },
                () => {
                    this.topStoriesLoading.emit(false);
                }
            );
        });
    }
    stopFetchTopStories() {
        this.topStoriesAlive = false;
    }
}
