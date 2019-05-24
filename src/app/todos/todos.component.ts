import { Component } from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todo$: Observable<any>;
  constructor(private apiService: ApiService) {
    this.todo$ = this.apiService.getTodos();
  }

}
