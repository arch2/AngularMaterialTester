import { Component, Input } from '@angular/core';

@Component({
    selector: 'f-dropdown',
    template: `
    <div fxLayout="row wrap" fxLayoutAlign="space-between center">
        <mat-form-field>
            <mat-select [placeholder]="label">
            <mat-option *ngFor="let item of options" [value]="item.key">
                {{item.value}}
            </mat-option>
            </mat-select>
        </mat-form-field>
    </div>
  `
})
export class FieldDropdownComponent {
    @Input('dataProvider') options: Array<any>;
    @Input('label') label: string;
}