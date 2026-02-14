import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpaceValidator(control:AbstractControl): ValidationErrors | null{

    if (!control.value) {
        return null;
      }
      const hasSpace = control.value.includes(' ');
      return hasSpace ? { noSpace: 'true' } : null;

}