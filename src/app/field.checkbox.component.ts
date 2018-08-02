import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'f-checkbox-group',
    template: `
    <div fxLayout="row wrap" fxLayoutAlign="space-between center">
      <div *ngFor="let checkbox of checkboxes; let i = index">
        <mat-checkbox [id]="checkbox.key">{{checkbox.label}} </mat-checkbox>
      </div>  
    </div>
  `
})
export class FieldCheckboxGroup {
    @Input('dataProvider') checkboxes: Array<any>;
}