import { Directive } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[validatenumber]'
})
export class ValidateNumberDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const value = control.value
        let status = true
        if (value.length > 0) {
            for (let c of value) {
                if (!(c >= 0 && c <= 9)) {
                    status = false
                    break;
                }
            }
        }

        if (!status)
            return {
                number: 'only number'
            };
        else
            return null
    }
    // registerOnValidatorChange?(fn: () => void): void {

    // }

}