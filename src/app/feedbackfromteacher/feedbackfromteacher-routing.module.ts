import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackfromteacherPage } from './feedbackfromteacher.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackfromteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackfromteacherPageRoutingModule {}
