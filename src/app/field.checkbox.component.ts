import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
  selector: 'f-checkbox',
  template: `
    <div [formGroup]="formGroup">
      <mat-checkbox  [id]="checkbox.key" [formControlName]="checkbox.key">{{checkbox.label}} </mat-checkbox>
    </div>
  `
})
export class FieldCheckbox {
  @Input('dataProvider') checkbox: any;
  @Input('form') formGroup: FormGroup;
}