import { Component, Input } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';

@Component({
    selector: 'card-form',
    templateUrl: `form.card.component.html`
})
export class CardFormComponent {
    @Input('card') cards: any;
    @Input('form') formGroup: FormGroup;
}