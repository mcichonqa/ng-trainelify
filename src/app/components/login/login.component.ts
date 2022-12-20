import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Route, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { TokenStorageService } from "src/app/services/token.storage.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles = [];

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private _fb: FormBuilder, private router: Router) {
        this.form = this._fb.group({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }

    get fc(): any {
        return this.form['controls'];
    }

    onSubmit(): void {
        this.authService.login(this.form.value.username, this.form.value.password).subscribe(
          token => {
            let tokenObj = JSON.parse(atob(token.split('.')[1]));

            this.tokenStorage.saveToken(token);
            this.tokenStorage.saveUser(tokenObj);
            
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().role;
            this.router.navigate(['/dashboard'])
          },
          err => {
            this.errorMessage = err.error;
            this.isLoginFailed = true;
          }
        );
      }
    
      reloadPage(): void {
        window.location.reload();
      }

}