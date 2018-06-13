import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {

    validate(passwordGroup: AbstractControl): ValidationErrors | null {
        const passwordField: AbstractControl =
            passwordGroup.get('password');

        const confirmPasswordField: AbstractControl =
            passwordGroup.get('confirmPasswordField');

        if ((this.validateFieldsTruthy([passwordField, confirmPasswordField]))
            && passwordField.value !== confirmPasswordField.value) {
            return { 'notEqual': true };
        }

        return null;
    }

    validateFieldsTruthy(fields: AbstractControl[]): boolean {
        return fields.every((control: AbstractControl) => { return control != null }
        );
    }
}