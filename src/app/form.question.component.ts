import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
  selector: 'question-form',
  templateUrl: `form.question.component.html`
})
export class QuestionFormComponent {
  @Input('question') questions: any;
  @Input('form') formGroup: FormGroup;
}