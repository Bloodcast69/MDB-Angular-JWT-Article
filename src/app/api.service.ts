import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

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

  public login(username: string, password: string): Observable<any> {
    this._isLoggedIn = true;
    return of(null);
  }

  public logout() {
    this._isLoggedIn = false;
  }

  public get isLoggedIn() {
    return this._isLoggedIn;
  }


}
