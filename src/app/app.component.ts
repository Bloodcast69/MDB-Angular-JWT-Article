import {Component} from '@angular/core';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private apiService: ApiService, private router: Router) {

  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.apiService.logout();
    this.isLoggedIn = this.apiService.isLoggedIn;
  }
}
