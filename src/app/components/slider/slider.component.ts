import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])

      // transition('void => *', [animate('1s')]),
      // transition('* => void', [animate('500ms')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;

  currentSlideIndex: number = 0;

  readonly imageSize = IMAGES_SIZES;

  ngOnInit(): void {
    console.log(this.currentSlideIndex);
    if (!this.isBanner)
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
        // console.log(this.items.length);
      }, 2000);
  }
}
