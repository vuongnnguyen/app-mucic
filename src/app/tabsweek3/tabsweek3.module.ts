import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabsweek3PageRoutingModule } from './tabsweek3-routing.module';

import { Tabsweek3Page } from './tabsweek3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabsweek3PageRoutingModule
  ],
  declarations: [Tabsweek3Page]
})
export class Tabsweek3PageModule {}
