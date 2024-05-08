import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../shared/feedback-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-feedbackfromteacher',
  templateUrl: './feedbackfromteacher.page.html',
  styleUrls: ['./feedbackfromteacher.page.scss'],
})
export class FeedbackfromteacherPage implements OnInit {

  studentName!: string;
  feedbackType!: string;
  feedback!: string;

  constructor(private feedbackService: FeedbackServiceService,private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitFeedback() {
    this.feedbackService.submitFeedback({
      studentName: this.studentName,
      feedbackType: this.feedbackType,
      feedback: this.feedback
    });
    // Clear the form fields after submitting feedback
    this.studentName = '';
    this.feedbackType = '';
    this.feedback = '';

    this.router.navigate(['home']);


  }

  
}
