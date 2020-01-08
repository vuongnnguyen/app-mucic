import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeltailsPageRoutingModule } from './deltails-routing.module';

import { DeltailsPage } from './deltails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeltailsPageRoutingModule
  ],
  declarations: [DeltailsPage]
})
export class DeltailsPageModule {}
