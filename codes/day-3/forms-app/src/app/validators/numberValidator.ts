import { AbstractControl, ValidationErrors } from "@angular/forms";

export const numberValidator = (control: AbstractControl): ValidationErrors | null => {

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