import { Component, OnInit } from '@angular/core';
import { AdsService } from "./shared/ads.service"

@Component({
  selector: 'ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {

  constructor(private adsService: AdsService) { }

  ngOnInit() {}

}
