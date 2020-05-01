import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialSwipePage } from './tutorial-swipe.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialSwipePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialSwipePageRoutingModule {}
