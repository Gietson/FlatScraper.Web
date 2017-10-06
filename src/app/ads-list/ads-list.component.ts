import { Component, OnInit } from '@angular/core';
import { AdsService } from "./shared/ads.service"
import { IAd } from "../ads-list/shared/ads.model";

@Component({
  selector: 'ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  totalPages: number;
  currentPage: number;
  resultsPerPage: number;
  totalResults: number;
  ads: IAd[];
  isBusy = true;

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.adsService.getAds().subscribe((result) => {
      this.isBusy = false;
      //console.log('ads-list=' + JSON.stringify(result));
      this.ads = result.items;
      this.currentPage = result.currentPage;
      this.resultsPerPage = result.resultsPerPage;
      this.totalPages = result.totalPages;
      this.totalResults = result.totalResults;

      this.length = result.totalResults;
      this.pageSize = result.resultsPerPage;
    });
  }

}
