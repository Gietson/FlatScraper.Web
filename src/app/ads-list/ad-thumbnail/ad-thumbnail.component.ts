import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IAd } from "../index";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ad-thumbnail',
  templateUrl: './ad-thumbnail.component.html',
  styleUrls: ['./ad-thumbnail.component.css']
})
export class AdThumbnailComponent {
  @Input() ad: any;

}
