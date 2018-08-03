import { Component, OnInit, Input } from '@angular/core';
import { FORM_DATA } from './form.data';

@Component({
  selector: 'question-form',
  templateUrl: `question.form.component.html`
})
export class QuestionFormComponent {
  public questions: Array<any> = FORM_DATA;
}