import { Component, Input } from '@angular/core';
import { IAd } from "../index";

@Component({
  selector: 'ad-thumbnail',
  templateUrl: './ad-thumbnail.component.html',
  styleUrls: ['./ad-thumbnail.component.css']
})
export class AdThumbnailComponent {
  @Input() ad: IAd[];

}
