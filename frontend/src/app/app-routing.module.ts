import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterFrontPageComponent } from './center-front-page/center-front-page.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';

const routes: Routes = [
  { path: '', component: CenterFrontPageComponent },
  { path: 'stockslist', component: StocksListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
