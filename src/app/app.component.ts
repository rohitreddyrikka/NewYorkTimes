import { Component, OnInit, NgZone } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private mSS: MalihuScrollbarService) {
  }
  ngOnInit() {
    $('.swipe-tabs')['slick']({
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      swipeToSlide: true,
      edgeFriction: 0,
      touchMove: true,
      speed: 800,
      arrows: false,
      adaptiveHeight: true,
      slidesPerRow: 1,
      vertical: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
    this.mSS.initScrollbar(document.body,
       {
        axis: 'y',
        theme: 'rounded-dark',
        autoHideScrollbar: true,
        scrollInertia: 2000,
        autoDraggerLength: true,
        autoExpandScrollbar: true,
        scrollButtons:
        {
          enable: true
        }
      }
    );
  }
}
