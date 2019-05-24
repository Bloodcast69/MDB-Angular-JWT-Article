import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _username = '';

  constructor(private http: HttpClient, private router: Router) { }

  public getTodos() {
    return this.http.get('api/todos');
  }

  public login(username: string, password: string) {
    return this.http.post<{ token: string }>('/api/auth', {username: username, password: password}).pipe(
      map(result => {
        localStorage.setItem('access_token', result.token);
        this._username = username;
      }));
  }

  public logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  public get isLoggedIn() {
    return (localStorage.getItem('access_token') !== null);
  }

  public get username() {
    return this._username;
  }
}
