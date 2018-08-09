import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
    selector: 'f-dropdown',
    template: `
    <mat-form-field [formGroup]="formGroup">
        <mat-select [placeholder]="data.label" [formControlName]="data.key">
        <mat-option *ngFor="let item of data.options" [value]="data.key">
            {{item.value}}
        </mat-option>
        </mat-select>
    </mat-form-field>
  `
})
export class FieldDropdownComponent {
    @Input('dataProvider') data: any;
    @Input('form') formGroup: FormGroup;
}