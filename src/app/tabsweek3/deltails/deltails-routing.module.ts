import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeltailsPage } from './deltails.page';

const routes: Routes = [
  {
    path: '',
    component: DeltailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeltailsPageRoutingModule {}
