import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { IdentityService } from "src/app/services/identity.service";
import { UserTokenService } from "src/app/services/user.token.service";

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

  constructor(private identityService: IdentityService, private userToken: UserTokenService, private _fb: FormBuilder, private router: Router) {
    this.form = this._fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    if (this.userToken.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.userToken.getUser().roles;
    }
  }

  get fc(): any {
    return this.form['controls'];
  }

  onSubmit(): void {
    this.identityService.login(this.form.value.username, this.form.value.password)
      .pipe(
        catchError((err) => { this.isLoginFailed = true; this.errorMessage = err.error; this.userToken.authenticated.next(false);  return throwError(err); }))
      .subscribe(rs => {
        let parsedRs = JSON.parse(atob(rs.split('.')[1]));
        this.userToken.saveToken(rs);
        this.userToken.saveUser(parsedRs);

        this.userToken.authenticated.next(true);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.userToken.getUser().role;
        this.router.navigate(['/dashboard']);
      });
  }
}