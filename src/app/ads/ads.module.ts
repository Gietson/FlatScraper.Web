import { NgModule } from '@angular/core';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsListComponent } from './components/ads-list/ads-list.component';

@NgModule({
  imports: [
    AdsRoutingModule
  ],
  declarations: [AdsListComponent]
})
export class AdsModule { }
