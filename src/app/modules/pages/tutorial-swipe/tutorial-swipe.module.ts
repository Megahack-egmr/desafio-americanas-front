import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialSwipePageRoutingModule } from './tutorial-swipe-routing.module';

import { TutorialSwipePage } from './tutorial-swipe.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TutorialSwipePageRoutingModule],
  declarations: [TutorialSwipePage],
})
export class TutorialSwipePageModule {}
