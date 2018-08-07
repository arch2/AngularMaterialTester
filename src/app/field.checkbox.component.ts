import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
  selector: 'f-checkbox',
  template: `<mat-checkbox [id]="checkbox.key">{{checkbox.label}} </mat-checkbox>`
})
export class FieldCheckbox {
  @Input('dataProvider') checkbox: any;
  @Input('form') formGroup: FormGroup;
}