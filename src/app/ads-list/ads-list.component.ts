import { Component, OnInit } from '@angular/core';
import { AdsService } from "./shared/ads.service"
import { IAd } from "../ads-list/shared/ads.model";

@Component({
  selector: 'ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  ads: IAd[];

  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.adsService.getAds().subscribe((ads) => {
      console.log('ads-list=' + JSON.stringify(ads));
      this.ads = ads;
    });
  }

}
