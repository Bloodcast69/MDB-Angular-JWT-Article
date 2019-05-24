import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../api.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    const formValue = this.form.value;
    this.apiService.login(formValue.username, formValue.password)
      .pipe(first())
      .subscribe(
        () => this.router.navigate(['todos']),
        () => this.error = 'Could not authenticate');
  }

}

