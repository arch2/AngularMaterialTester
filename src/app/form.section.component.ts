import { Component, OnInit, Input } from '@angular/core';
import { FORM_DATA } from './form.data';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'section-form',
    templateUrl: `form.section.component.html`
})
export class SectionFormComponent implements OnInit {
    public Sections: any = FORM_DATA;
    public formGroup: FormGroup;

    ngOnInit(): void {
        this.formGroup = this.FormToFormGroup(FORM_DATA);
    }
    private onSubmit(): void {

    }

    FormToFormGroup(formSection: Array<any>[]) {
        let group: any = {};
        formSection.forEach(section => {
            section["cards"].forEach(card => {
                card["fields"].forEach(field => {
                    if (field.controlType == "datetimepicker") { field.value = new Date(field.value) };
                    group[field.key] = new FormControl({ value: field.value || '', disabled: field.disabled }, this.mapValidators(field.validation));
                })
            })
        });
        let formGroup: FormGroup = new FormGroup(group);
        // this.ConfigureEvents(formGroup, formSection);
        return formGroup;
    }
    // FormToFormGroup(formSection: Array<any>[]) {
    //     let sectionGroup: any = {};
    //     formSection.forEach(section => {
    //         let group: any = {};
    //         section["cards"].forEach(card => {
    //             card["fields"].forEach(field => {
    //                 group[field.key] = new FormControl({ value: field.value || '', disabled: field.disabled }, this.mapValidators(field.validation));
    //             })
    //         })
    //         if (sectionGroup[section["formId"]]) {
    //             let existingFG: FormGroup = sectionGroup[section["formId"]];
    //             let fg: FormGroup = new FormGroup(group);
    //             Object.keys(fg.controls).forEach(field => {
    //                 const control = fg.get(field);
    //                 existingFG.addControl(field, control);
    //             });
    //         }
    //         else {
    //             sectionGroup[section["formId"]] = new FormGroup(group);
    //         }
    //     });
    //     let formGroup: FormGroup = new FormGroup(sectionGroup);
    //     // this.ConfigureEvents(formGroup, formSection);
    //     return formGroup;
    // }
    private mapValidators(validators: any) {
        const formValidators = [];

        if (validators) {
            for (const validation of Object.keys(validators)) {
                if (validation === 'required') {
                    formValidators.push(Validators.required);
                }
                if (validation === 'minLength') {
                    formValidators.push(Validators.min(validators[validation]));
                }
                if (validation === 'pattern') {
                    formValidators.push(Validators.pattern(validators[validation]));
                }
            }
        }

        return formValidators;
    }
    // private ConfigureEvents(formGroup: FormGroup, formSection: FormSection[]) {
    //     formSection.forEach(section => {
    //         section.cards.forEach(card => {
    //             card.fields.forEach(field => {
    //                 if (field.dataToLoad && field.controlToTieTo) {
    //                     formGroup.get(section.id).get(field.key).valueChanges.subscribe(val => this.LoadChildDropDownValues(field.dataToLoad, field.controlToTieTo, val, formGroup, section));
    //                 }
    //                 if (field.valueToAddValidator && field.controlToAddValidator) {
    //                     formGroup.get(section.id).get(field.key).valueChanges.subscribe(val => this.AddRemoveValidator(field.valueToAddValidator, field.controlToAddValidator, val, formGroup, section));
    //                     this.AddRemoveValidator(field.valueToAddValidator, field.controlToAddValidator, field.value, formGroup, section);
    //                 }
    //                 if (field.controlType == ControlType.Formula) {
    //                     field.options.forEach(fieldToCalculate => {
    //                         formGroup.get(fieldToCalculate.Name).get(fieldToCalculate.Value).valueChanges.subscribe(val => this.CalculateField(field, formGroup, section));
    //                     });
    //                     this.CalculateField(field, formGroup, section);
    //                 }
    //             })
    //         })
    //     });
    // }
    // private CalculateField(controlToPutCalculation: FormField<string>, group: FormGroup, section: FormSection) {
    //     let sum: number = 0;
    //     controlToPutCalculation.options.forEach(field => {
    //         if (group.get(field.Name).get(field.Value).value && parseInt(group.get(field.Name).get(field.Value).value)) {
    //             sum += parseInt(group.get(field.Name).get(field.Value).value);
    //         }
    //     });
    //     group.get(section.id).get(controlToPutCalculation.key).setValue(sum);
    // }
    // private AddRemoveValidator(valueToAddValidator: string, controlToAddValidator: FormField<string>, val: any, group: FormGroup, section: FormSection) {
    //     if (valueToAddValidator == val) {
    //         group.get(section.id).get(controlToAddValidator.key).setValidators(this.mapValidators(controlToAddValidator.validation));
    //     } else {
    //         group.get(section.id).get(controlToAddValidator.key).setValidators([]);
    //     }
    //     group.get(section.id).get(controlToAddValidator.key).updateValueAndValidity();
    // }
    // private clearField(controlToClear: FormField<string>, group: FormGroup, section: FormSection) {
    //     if (controlToClear) {
    //         controlToClear.options = null;
    //         group.get(section.id).get(controlToClear.key).setValue("");
    //         this.clearField(controlToClear.controlToTieTo, group, section);
    //     }
    // }
    // private LoadChildDropDownValues(dataToLoad: string, actionField: FormField<string>, val: any, group: FormGroup, section: FormSection) {
    //     this.configService.get_child_dropdown_values(dataToLoad, val).subscribe(
    //         results => {
    //             actionField.options = results;
    //             group.get(section.id).get(actionField.key).setValue("");
    //             if (actionField.controlToTieTo) {
    //                 this.clearField(actionField.controlToTieTo, group, section);
    //             }
    //         },
    //         e => console.log(e),
    //         () => console.log("done loading {0} from service", dataToLoad));
    // }
}