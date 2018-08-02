import { Component } from '@angular/core';

@Component({
    selector: 'mat-tester',
    templateUrl: './material.tester.component.html'
})
export class MaterialTesterComponent {
    title = 'MaterialTester';
    events: string[] = [];
    opened: boolean;
}
