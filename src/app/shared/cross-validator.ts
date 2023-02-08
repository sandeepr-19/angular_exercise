import { AbstractControl } from "@angular/forms";

export function passwordValidation(control:AbstractControl):{[key:string]:boolean}|null{
    const email=control.get('email');
    const password=control.get('password');
    if (password?.pristine||email?.pristine) {
        return null;
        
    }
    return email&&password&&password.value!=email.value?{'mismatch':true}:null;
}