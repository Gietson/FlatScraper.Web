import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdsService } from "./shared/ads.service"
import { IAd } from "../ads-list/shared/ads.model";
import { IAdSearch } from "../ads-list/shared/adsSearch.model";

import { PageEvent, MatSnackBar } from '@angular/material';

@Component({
  selector: 'ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  totalPages: number;
  currentPage: number;
  ads: IAd[];
  isBusy = true;
  form = <IAdSearch>{};

  totalResults = 100;
  resultsPerPage = 10;
  pageSizeOptions = [5, 10, 25, 100, 200, 500];

  // MdPaginator Output
  pageEvent: PageEvent;

  constructor(private adsService: AdsService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getAds(0, this.resultsPerPage);
  }

  onPaginateChange(event) {
    this.getAds(event.pageIndex, event.pageSize);
  }

  private getAds(page?: number, itemsPerPage?: number, form?: IAdSearch) {
    this.ads = [];
    this.adsService.getAds(page + 1, itemsPerPage, form).subscribe((result) => {
      console.log(result);
      this.isBusy = false;
      this.ads = result.items;
      this.currentPage = result.currentPage;
      this.resultsPerPage = result.resultsPerPage;
      this.totalPages = result.totalPages;
      this.totalResults = result.totalResults;

      this.snackBar.open('Data Loaded!', 'Close', {
        duration: 2000
      });
    });
  }

  search() {
    this.getAds(0, this.resultsPerPage, this.form);
  }

  trackByFn(index, ad) {
    return index; // or item.id
  }

}
