import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    form: FormGroup;

    constructor(private _authService: AuthService,  private _fb: FormBuilder) {
        this.form = this._fb.group({
            username: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required]),
            surname: new FormControl(""),
            givenname: new FormControl("", [Validators.required]),
            gender: new FormControl("", [Validators.required]),
            birthdate: new FormControl("", [Validators.required]),
            role: new FormControl("", [Validators.required])
        });
    }

    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    get fc(): any {
        return this.form['controls'];
    }

    onSubmit(): void {
        this._authService.register(
            this.form.value.username, this.form.value.password, this.form.value.email, this.form.value.surname, this.form.value.givenname, this.form.value.gender, this.form.value.birthdate, this.form.value.role).subscribe({
            next: (data) => {
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            error: (err) => {
                this.errorMessage = JSON.parse(err.error).errors;
                this.isSignUpFailed = true;
            }
        });
    }
}