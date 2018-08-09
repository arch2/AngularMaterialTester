import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
    selector: 'f-textbox',
    template: `
    <div fxLayout="row wrap" fxLayoutAlign="space-between center" [formGroup]="formGroup">
        <mat-form-field class="example-full-width">
            <input matInput [placeholder]="value.label" [formControlName]="value.key">
        </mat-form-field>
    </div>
  `
})
export class TextboxComponent {
    @Input('dataProvider') value: any;
    @Input('form') formGroup: FormGroup;
}