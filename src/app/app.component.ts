import { Component, HostListener } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('window:click') windowClick(): void { this._userIdle.resetTimer(); }

  constructor(private _userIdle: UserIdleService){}
}
