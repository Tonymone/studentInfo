import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Feedback {
  studentName: string;
  feedbackType: string;
  feedback: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  private feedbackCollection: AngularFirestoreCollection<Feedback>;
  feedback$: Observable<Feedback[]>;

  constructor(private firestore: AngularFirestore) {
    this.feedbackCollection = this.firestore.collection<Feedback>('feedback');
    this.feedback$ = this.feedbackCollection.valueChanges();
  }

  submitFeedback(feedback: Feedback) {
    this.feedbackCollection.add(feedback);
  }

  getFeedback(): Observable<Feedback[]> {
    return this.feedback$;
  }
}
