import { Component, OnInit } from "@angular/core";
import { UserTokenService } from "src/app/services/user.token.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(public userToken: UserTokenService) {
    }

    logout(): void {
        this.userToken.signOut();
        this.userToken.authenticated.next(false);
    }
}