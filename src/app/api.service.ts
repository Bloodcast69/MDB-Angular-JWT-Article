import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _isLoggedIn = false;

  constructor(private http: HttpClient) {
  }


  public getTodos() {
    return this.http.get('api/todos');
  }

  public getTodo(id: number) {
    return this.http.get(`api/todos/${id}`);
  }

  public login() {
    this._isLoggedIn = true;
  }

  public logout() {
    this._isLoggedIn = false;
  }

  public get isLoggedIn() {
    return this._isLoggedIn;
  }


}
