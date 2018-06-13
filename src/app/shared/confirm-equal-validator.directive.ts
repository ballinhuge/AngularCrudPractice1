import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    @Input() appConfirmEqualValidatior: string;

    validate(control: AbstractControl): ValidationErrors | null {
        const controlToCompare:AbstractControl =
            control.parent.get(this.appConfirmEqualValidatior);

        if ((controlToCompare) && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }

        return null;
    }
}