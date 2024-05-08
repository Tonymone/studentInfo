import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackfromteacherPageRoutingModule } from './feedbackfromteacher-routing.module';

import { FeedbackfromteacherPage } from './feedbackfromteacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackfromteacherPageRoutingModule
  ],
  declarations: [FeedbackfromteacherPage]
})
export class FeedbackfromteacherPageModule {}
