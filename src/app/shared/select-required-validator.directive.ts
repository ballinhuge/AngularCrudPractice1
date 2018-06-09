import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[appSelectValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === '-1' ? {'defaultSelected': true} : null;
    }

    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }

}
