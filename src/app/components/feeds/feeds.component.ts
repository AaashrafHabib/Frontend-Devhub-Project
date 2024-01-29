import { Component ,Input} from '@angular/core';
import { Feed, Feeds } from './feeds-data';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent {
  @Input() cardWidth: string = '460px';
  @Input() cardheight: string = '250px';
  
  feeds:Feed[];

  constructor() {

    this.feeds = Feeds;
  }
}
