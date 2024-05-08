import { Component } from '@angular/core';
import { AuthserviceService } from '../shared/authservice.service';
import { Observable } from 'rxjs';
import { Feedback, FeedbackServiceService } from '../shared/feedback-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users$ = this.authService.getUsers();
  currentUser$ = this.authService.getCurrentUser();
  feedbackList$: Observable<Feedback[]>;
  gotoFeedbackpage(){
this.router.navigate(['feedbackfromteacher']);
  }
  constructor(
    public authService: AuthserviceService,private feedbackService: FeedbackServiceService,private router:Router
  ) { 
    this.feedbackList$ = this.feedbackService.getFeedback();

  }

 
}
