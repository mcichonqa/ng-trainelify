import { Component } from "@angular/core";
import { map, of } from "rxjs";
import { UserTokenService } from "src/app/services/user.token.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

    clientName: string;;

    constructor(private userToken: UserTokenService) {
        this.parseJson()
            .pipe(
                map(x => { this.clientName = `${x.given_name} ${x.surname}` })
            )
            .subscribe();
    }
    
    private parseJson(){
        let token = this.userToken.getToken() as any;
        return token != null ? of(JSON.parse(atob(token.split('.')[1]))) : of();
    }
}