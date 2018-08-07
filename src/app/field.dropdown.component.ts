import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
    selector: 'f-dropdown',
    template: `
    <mat-form-field>
        <mat-select [placeholder]="label">
        <mat-option *ngFor="let item of options" [value]="item.key">
            {{item.value}}
        </mat-option>
        </mat-select>
    </mat-form-field>
  `
})
export class FieldDropdownComponent {
    @Input('dataProvider') options: Array<any>;
    @Input('label') label: string;
    @Input('form') formGroup: FormGroup;
}