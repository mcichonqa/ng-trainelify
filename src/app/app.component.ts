import { Component } from '@angular/core';
import { BehaviorSubject, delay, interval, map, mergeMap, Observable, of, pipe, retry, Subject, throwError } from 'rxjs';
import { TokenStorageService } from './services/token.storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private token: TokenStorageService) {
  }

  hasAttachedMenu(): boolean{
    var user = this.token.getUser();

    if(Object.keys(user).length == 0){
      return false;
    }

    return true;
  }
}