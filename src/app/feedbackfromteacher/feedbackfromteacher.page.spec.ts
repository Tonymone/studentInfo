import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackfromteacherPage } from './feedbackfromteacher.page';

describe('FeedbackfromteacherPage', () => {
  let component: FeedbackfromteacherPage;
  let fixture: ComponentFixture<FeedbackfromteacherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeedbackfromteacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
