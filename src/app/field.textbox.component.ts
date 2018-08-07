import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
    selector: 'f-textbox',
    template: `
    <div fxLayout="row wrap" fxLayoutAlign="space-between center">
        <mat-form-field class="example-full-width">
            <input matInput [placeholder]="label" [value]="value">
        </mat-form-field>
    </div>
  `
})
export class TextboxComponent {
    @Input('dataProvider') value: Array<any>;
    @Input('label') label: string;
    @Input('form') formGroup: FormGroup;
}