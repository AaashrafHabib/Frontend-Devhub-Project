import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() cardWidth: string = '700px';
  @Input() cardheight: string = '700px';
  selectedComponent!: string;
}
