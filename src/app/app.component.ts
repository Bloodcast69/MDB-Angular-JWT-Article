import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private apiService: ApiService) {

  }

  login() {
    this.apiService.login();
    this.isLoggedIn = this.apiService.isLoggedIn;
  }

  logout() {
    this.apiService.logout();
    this.isLoggedIn = this.apiService.isLoggedIn;
  }
}
