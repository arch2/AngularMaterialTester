import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
    selector: 'f-date-time-picker',
    template: `
    <mat-form-field [formGroup]="formGroup">
        <input matInput [matDatepicker]="picker" [placeholder]="dateTimePicker.label" [id]="dateTimePicker.key" [formControlName]="dateTimePicker.key">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `
})
export class FieldDateTimePicker {
    @Input('dataProvider') dateTimePicker: any;
    @Input('form') formGroup: FormGroup;
}
