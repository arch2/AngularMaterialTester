import { Component, OnInit, Input } from '@angular/core';
import { FORM_DATA } from './form.data';

@Component({
  selector: 'question-form',
  template: `
    <fieldset>
      <div *ngFor="let question of questions; let i = index">
        <div *ngIf="question.visible" [ngSwitch]="question.controlType" class="switch" >
          <f-checkbox-group *ngSwitchCase="'checkboxGroup'" [dataProvider]="question.list"></f-checkbox-group>
          <f-date-time-range *ngSwitchCase="'timeRange'" [label]="question.label" [start]="question.start" [end]="question.end"></f-date-time-range>
          <f-dropdown *ngSwitchCase="'dropdown'" [dataProvider]="question.options" [label]="question.label"></f-dropdown>
          <f-textbox *ngSwitchCase="'textbox'" [dataProvider]="question.key" [label]="question.label"></f-textbox>
        </div>
      </div>
    </fieldset>
  `
})
export class QuestionFormComponent {
  public questions: Array<any> = FORM_DATA;
}