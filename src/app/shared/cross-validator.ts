import { AbstractControl } from "@angular/forms";

export function passwordValidation(control:AbstractControl):{[key:string]:boolean}|null{
    const email=control.get('email');
    const password=control.get('password');
    if (password?.pristine||email?.pristine) {
        return null;
        
    }
    if(email&&password&&password.value!=email.value){
        return {'mismatch':true};
    }
    else{
        return null;
    }
}