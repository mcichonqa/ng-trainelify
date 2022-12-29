import { Component } from '@angular/core';
import { UserTokenService } from './services/user.token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public userToken: UserTokenService) {
  }
}