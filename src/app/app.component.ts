import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AppState } from './store';
import { loadUsers } from './store/actions/user/user.actions';
import { userUsersSelector } from './store/selectors/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-first';
  users$: Observable<User[]>;
  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(userUsersSelector)
  }
}
