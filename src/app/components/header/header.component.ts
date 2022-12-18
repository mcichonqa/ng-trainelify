import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "src/app/services/token.storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isLogged = false;

    constructor(private _token: TokenStorageService) {
    }

    ngOnInit(): void {
        let user = this._token.getUser();

        if (Object.keys(user).length > 0) {
            this.isLogged = true;
        }
    }

    logout(): void {
        this._token.signOut();
        this.isLogged = false;
    }
}