import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[validatenumber]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: ValidateNumberDirective,
            multi: true
        }
    ]
})
export class ValidateNumberDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (control.value !== null) {
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
        else
            return null
    }
    // registerOnValidatorChange?(fn: () => void): void {

    // }

}